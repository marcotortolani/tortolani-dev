'use client';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

export default function SectionWorks() {
  const [itemsGrid, setItemsGrid] = useState(items);
  const [buttonMore, setButtonMore] = useState(true);
  function handleButton() {
    if (buttonMore) {
      if (itemsGrid.length === items.length + itemsExtra.length) return;
      setItemsGrid([...itemsGrid, ...itemsExtra]);
      setButtonMore(false);
    } else {
      const newArr = itemsGrid.filter((item, i) => !itemsExtra.includes(item));
      setItemsGrid(newArr);
      setButtonMore(true);
    }
  }

  return (
    <section
      id="works"
      className="min-h-[100svh] h-fit pb-20 w-screen rounded-md flex flex-col justify-between gap-10 md:items-center md:justify-center bg-white dark:bg-black/[0.96] antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

      <BentoGrid className="max-w-4xl mx-auto group ">
        {itemsGrid.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`${
              i === 3 || i === 6 ? 'md:col-span-2' : ''
            } hover:z-20 cursor-pointer`}
          />
        ))}
      </BentoGrid>
      <div className=" relative w-full max-w-4xl ">
        <Button
          className=" absolute right-0 dark:text-gray-400 text-gray-500"
          size={'sm'}
          variant={'outline'}
          onClick={handleButton}
        >
          {buttonMore ? 'Ver más' : 'Ver menos'}
        </Button>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

const itemsExtra = [
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
