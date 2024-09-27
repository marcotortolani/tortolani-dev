'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import useStateStore from '@/app/store/useStateStore'
import { Section } from '@/app/store/useStateStore'

type Tab = {
  title: string
  value: string
  href: string
}

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0])
  const router = useRouter()

  const sectionNav = useStateStore((state) => state.sectionNav)
  const setSectionNav = useStateStore((state) => state.setSectionNav)


  useEffect(() => {
    if (sectionNav) {
      const tab = propTabs.find((tab) => tab.value === sectionNav)
      if (tab) {
        setActive(tab)
      }
    }
  }, [sectionNav])

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setActive(newTabs[0])
  }

  const handleClickTab = ({ tab, index }: { tab: Tab; index: number }) => {
    //setActive(tab)
    router.push(tab.href)
    //moveSelectedTabToTop(index)
    //setSectionNav(tab.value as Section)
  }

  return (
    <div
      className={cn(
        'flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full',
        containerClassName
      )}
    >
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => handleClickTab({ tab, index: idx })}
          className={cn('relative px-4 py-2 rounded-full', tabClassName)}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
              className={cn(
                'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full dark:shadow-inner dark:shadow-lime-100',
                activeTabClassName
              )}
            />
          )}
          <span
            className={`${
              active.value === tab.value
                ? 'dark:text-slate-900 font-medium'
                : 'text-black dark:text-white'
            } transition-colors duration-500 ease-in-out relative block`}
          >
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  )
}
