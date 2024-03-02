'use client';

import { Tabs } from './ui/Tabs';

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
    title: 'Playground',
    value: 'playground',
    href: '#playground',
  },
  {
    title: 'Content',
    value: 'content',
    href: '#content',
  },
  {
    title: 'Random',
    value: 'random',
    href: '#random',
  },
];

export function Navbar() {
  return (
    <nav className=" relative flex items-center justify-start ">
      <Tabs tabs={tabs} tabClassName=" text-sm " activeTabClassName=" bg-gradient-to-b from-lime-200 to-lime-500 dark:bg-gradient-to-b dark:from-lime-400 dark:to-lime-700" />
    </nav>
  );
}
