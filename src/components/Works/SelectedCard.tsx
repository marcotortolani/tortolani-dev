'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as TablerIcon from '@tabler/icons-react'
import { itemCard } from '@/types/sectionWorks'
import { IconX } from '@tabler/icons-react'
import MockupPhone from './MockupPhone'

export default function SelectedCard({
  data,
  onClose,
}: {
  data: itemCard | null
  onClose: React.Dispatch<React.SetStateAction<itemCard | null>>
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (data === null) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(null)
      }
    }
    document.addEventListener('keydown', handleEsc)

    // close the modal if the user clicks outside of it
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event?.target)) {
        onClose(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [data, onClose])

  return (
    <div
      className={`${
        data !== null ? 'scale-y-100 ' : 'scale-y-0'
      } absolute z-30 w-full h-full flex items-center p-8 cursor-default  backdrop-blur-sm dark:bg-black/40 transition-all duration-300 ease-in-out rounded-xl`}
    >
      <div
        ref={ref}
        className=" relative grid grid-cols-5 grid-rows-6 gap-4 w-full h-fit max-h-[40rem] rounded-xl hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border-black/[0.3] bg-gray-200 border"
      >
        <button
          className=" absolute z-50 top-2 right-2 hover:dark:bg-neutral-800 transition-all duration-150 ease-in-out p-1 flex items-center  dark:bg-black dark:border-white/[0.2] border-black/[0.3] bg-gray-200 border rounded-lg"
          onClick={() => onClose(null)}
        >
          <IconX size={20} />
        </button>
        <div className=" col-span-3 row-span-4 flex flex-col justify-between relative rounded-lg ">
          <div className=" w-full flex items-center gap-10 ">
            <h3 className=" w-full min-w-fit line-clamp-1 text-xl font-sans font-extrabold text-wrap text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {data?.title}
            </h3>
            <span className=" w-full h-[2px] dark:bg-gray-500/40 bg-black/50 content-normal rounded-full" />
          </div>
          <div className="w-full relative overflow-hidden aspect-video rounded-[inherit]">
            {data ? (
              <>
                <Image
                  className=" object-cover object-top rounded-[inherit] border-[1px] dark:border-gray-500/50"
                  src={data?.desktopImg}
                  alt={`Image ${data?.title} portfolio`}
                  fill
                />
                <div className="w-full h-full absolute top-0 bg-black/50 ">
                  <MockupPhone
                    mobileImage={data?.mobileImg}
                    title={data?.title}
                  />
                </div>
              </>
            ) : (
              <Skeleton />
            )}
          </div>
        </div>

        <div className="row-span-4 col-start-4 col-span-2 row-start-1 w-full flex flex-col justify-between  transition duration-200">
          <div className=" mt-3 flex flex-col gap-2">
            <h4 className=" text-base font-semibold">Tech Stack</h4>
            <ul className=" w-full flex flex-wrap items-center gap-4">
              {data?.techStack.map((tag, i) => (
                <li
                  key={i}
                  className={`z-0 h-6 py-1 px-2 flex gap-1 items-center relative group/item bg-neutral-600 rounded-full `}
                >
                  <Icon nameTag={tag?.icon} />
                  <span className=" text-sm">{tag?.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className=" w-full flex justify-center gap-6">
            <LinkStyled
              text={data?.urlSite ? 'Site' : 'Demo'}
              href={data?.urlSite || data?.urlDemo || ''}
            >
              <Icon nameTag="IconWorldWww" />
            </LinkStyled>
            <LinkStyled text="Repo" href={data?.urlRepo || ''}>
              <Icon nameTag="IconBrandGithub" />
            </LinkStyled>
          </div>
        </div>

        <div className=" col-span-5 row-span-2 col-start-1 row-end-7 ">
          <h4 className=" text-base font-semibold">Description</h4>
          <p className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
            {data?.description}
          </p>
          <p className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
            {data?.developmentDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

function Icon({ nameTag = '' }: { nameTag: string }) {
  if (nameTag === '')
    return (
      <div className="h-3/5 aspect-square border border-neutral-300 rounded-full" />
    )
  const Tag = TablerIcon[nameTag]
  return <Tag className="h-full w-auto text-neutral-300" />
}

function LinkStyled({
  text,
  children,
  href,
}: {
  text: string
  children: any
  href: string
}) {
  if (!href.length) return null
  return (
    <Link
      className=" flex items-center gap-2 h-10 px-4 py-2 text-neutral-200 hover:bg-sky-800 hover:scale-105 transition-all duration-200 ease-in-out font-semibold uppercase border-2 border-neutral-300 rounded-md"
      href={href}
      target="_blank"
    >
      {children}
      {text}
    </Link>
  )
}
