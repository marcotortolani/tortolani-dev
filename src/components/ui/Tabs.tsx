'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Tab = {
  title: string;
  value: string;
  href: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const router = useRouter();

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setActive(newTabs[0]);
  };

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
          onClick={() => {
            router.push(tab.href);
            moveSelectedTabToTop(idx);
          }}
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
                'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ',
                activeTabClassName
              )}
            />
          )}
          <span className="relative block text-black dark:text-white">
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  );
};
