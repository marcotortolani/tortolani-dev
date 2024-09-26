'use client'

import { Tabs } from './ui/Tabs'

const tabs = [
  {
    title: 'Home',
    value: 'home',
    href: '#home',
  },
  {
    title: 'Works',
    value: 'works',
    href: '#works',
  },
  {
    title: 'Education',
    value: 'education',
    href: '#education',
  },
  {
    title: 'About',
    value: 'about',
    href: '#about',
  },
  // {
  //   title: 'Testimonials',
  //   value: 'testimonials',
  //   href: '#testimonials',
  // },
  {
    title: 'Contact',
    value: 'contact',
    href: '#contact',
  },
]

export function Navbar() {
  return (
    <nav className=" relative flex items-center justify-start ">
      <Tabs
        tabs={tabs}
        tabClassName=" text-sm "
        activeTabClassName=" bg-gradient-to-b from-lime-200 to-lime-500 dark:bg-gradient-to-b dark:from-lime-400 dark:to-lime-700  "
      />
    </nav>
  )
}
