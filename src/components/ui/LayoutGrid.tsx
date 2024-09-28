'use client'
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BentoGridItem } from '../Works/BentoGrid'

import { works } from '../../config/config.json'
import { itemCard } from '@/types/sectionWorks'
import SelectedCard from '../Works/SelectedCard'

export const LayoutGrid = ({ cards }: { cards: itemCard[] }) => {
  const [selected, setSelected] = useState<itemCard | null>(null)
  const [lastSelected, setLastSelected] = useState<itemCard | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)

  const handleClick = (card: itemCard) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  useEffect(() => {
    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.5 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, 
      y: index % 2 === 0 ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  })

  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  return (
    <motion.div
      ref={gridRef}
      className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={gridVariants}
    >
      <AnimatePresence>
        {cards.map((card, i) => {
          const index = i % 5

          let colSpan = 'col-span-1'
          if (index === 0 || index === 3) colSpan = 'md:col-span-2'
          if (index === 4) colSpan = 'md:col-span-3'
          return (
            <div key={i} className={`${colSpan} w-full h-full  min-h-[300px]`}>
              <motion.div
                variants={cardVariants(i)}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                exit={{ opacity: 0, y: -20 }}
                onClick={() => handleClick(card)}
                className={cn(
                  'relative h-full ',
                  selected?.id === card.id
                    ? ' rounded-lg cursor-pointer absolute inset-0 m-auto z-50 flex justify-center items-center flex-wrap flex-col '
                    : lastSelected?.id === card.id
                    ? ' z-40  rounded-xl '
                    : ' rounded-xl '
                )}
                layoutId={`card-${card.id}`}
              >
                {selected?.id === card.id && (
                  <SelectedCard data={selected} onClose={setSelected} />
                )}
                <BentoGridItem
                  index={i}
                  onClick={() => handleClick(card)}
                  item={works[i]}
                  className={` ${
                    selected?.id === card.id ? ' w-full max-h-[900px] ' : ' '
                  } z-0 h-full hover:z-20 transition-all duration-500 ease-in-out cursor-pointer`}
                />
              </motion.div>
            </div>
          )
        })}
      </AnimatePresence>
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </motion.div>
  )
}
