import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { itemCard } from '@/types/sectionWorks'
import * as TablerIcon from '@tabler/icons-react'
import MockupPhone from './MockupPhone'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  item,
  index,
  onClick,
}: {
  className?: string
  item: itemCard
  index: number
  onClick: (e: any) => void
}) => {
  const { title, description, desktopImg, mobileImg, techStack } = item
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl hover:scale-105 transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border-black/[0.3] bg-gray-200 border justify-between flex flex-col space-y-4',
        className
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden relative h-full aspect-[16/9] rounded-lg ">
        <Image
          className=" object-top object-cover rounded-[inherit]"
          src={desktopImg}
          alt={`Desktop Image ${title}`}
          fill
        />
        <div className=" absolute top-0 w-full h-full bg-transparent group-hover/bento:bg-black/60 transition-all duration-300 ease-in-out content-normal" />
        <div className="w-full h-full absolute top-0 translate-x-full group-hover/bento:translate-x-0 transition-all duration-500 ease-in-out">
          <MockupPhone mobileImage={mobileImg} title={title} />
        </div>
      </div>
      <div className="group-hover/bento:translate-x-0 transition duration-200">
        <ul className=" flex items-center gap-2">
          {techStack.map((tag, i) => (
            <li key={i}>
              <Icon nameTag={tag?.icon} />
            </li>
          ))}
        </ul>
        <div className=" line-clamp-1 font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="line-clamp-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}

function Icon({ nameTag = '' }: { nameTag: any }) {
  if (nameTag === '') return null
  const Tag = TablerIcon[nameTag]

  return <Tag className="h-5 w-5 text-neutral-500" />
}
