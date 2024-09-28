'use client'
import { useState, useRef, useEffect } from 'react'
import useStateStore from '@/app/store/useStateStore'

import { Button } from '../ui/button'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import SelectedCard from './SelectedCard'

import { itemCard } from '@/types/sectionWorks'
import dataConfig from '../../config/config.json'

const CARDS_DISPLAYED_INITIAL = 5

export default function SectionWorks() {
  const [cardsDisplayed, setCardsDisplayed] = useState(CARDS_DISPLAYED_INITIAL)
  //const [buttonMore, setButtonMore] = useState(true)
  const [selectedCard, setSelectedCard] = useState<itemCard | null>(null)
  const buttonMore = cardsDisplayed !== dataConfig?.works.length
  const buttonLess =
    cardsDisplayed > CARDS_DISPLAYED_INITIAL &&
    cardsDisplayed <= dataConfig?.works.length

  const sectionRef = useRef<HTMLDivElement | null>(null)
  //const sectionNav = useStateStore((state) => state.sectionNav)
  const setSectionNav = useStateStore((state) => state.setSectionNav)


  function handleSelectedCard(e: any, item: itemCard) {
    //console.log(`X: ${e.clientX} - Y: ${e.clientY}`);

    if (selectedCard === item) {
      setSelectedCard(null)
      return
    }
    setSelectedCard(item)
  }

  function handleCardsDisplayed(e: any) {
    if (e.target.name === 'more') setCardsDisplayed((prev) => prev + 2)
    if (e.target.name === 'less') setCardsDisplayed((prev) => prev - 2)
  }

  useEffect(() => {
    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizar el estado según la visibilidad de la sección
        if (entry.isIntersecting) {
          setSectionNav('works')
        }
      },
      {
        // Opciones del observer
        root: null, // El viewport actual
        rootMargin: '0px',
        threshold: 0.75, // Cambia el valor de este umbral si necesitas ajustar la cantidad visible
      }
    )

    // Vincular el observer a la referencia de la sección
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="works"
      ref={sectionRef}
      className=" min-h-[100svh] h-fit pb-20 w-screen rounded-md flex flex-col justify-between gap-10 md:cardsInitial-center md:justify-center bg-white dark:bg-black/[0.96] antialiased dark:bg-dot-white/[0.4] bg-dot-black/[0.3] relative"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex cardsInitial-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <BentoGrid className=" relative max-w-4xl mx-auto group  ">
        {dataConfig?.works.map((item, i) => (
          <BentoGridItem
            key={i}
            index={i}
            onClick={(e: any) => handleSelectedCard(e, item)}
            item={item}
            className={`${i === 3 || i === 6 ? 'md:col-span-2' : ''} ${
              i < cardsDisplayed ? ' scale-100 relative ' : ' scale-0 fixed'
            } z-0 hover:z-20 transition-all duration-500 ease-in-out cursor-pointer`}
          />
        ))}

        <SelectedCard data={selectedCard} onClose={setSelectedCard} />

        {dataConfig?.works.length > 5 && (
          <div className="absolute -bottom-14 right-0 flex gap-4">
            <Button
              name="less"
              disabled={!buttonLess}
              className=" disabled:hidden dark:text-gray-400 text-gray-500 "
              size={'sm'}
              variant={'outline'}
              onClick={handleCardsDisplayed}
            >
              Ver menos
            </Button>
            <Button
              name="more"
              disabled={!buttonMore}
              className=" disabled:hidden dark:text-gray-400 text-gray-500 "
              size={'sm'}
              variant={'outline'}
              onClick={handleCardsDisplayed}
            >
              Ver más
            </Button>
          </div>
        )}
      </BentoGrid>
    </section>
  )
}
