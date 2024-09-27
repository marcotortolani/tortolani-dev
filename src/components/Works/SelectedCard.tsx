'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { itemCard } from '@/types/sectionWorks'
import { IconX } from '@tabler/icons-react'
import MockupPhone from './MockupPhone'
import Icon from '../ui/Icon'

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
              {data?.techStack.map(({ link, icon, name }, i) => (
                <Link key={i} href={link} target="_blank">
                  <li
                    className={` group/item relative z-0 h-6 transition-all duration-200 ease-in-out  `}
                  >
                    <div className=" h-full py-1 px-2 relative  bg-neutral-600 hover:bg-lime-600 hover:shadow-inner hover:shadow-lime-200 transition-all duration-300 ease-in-out rounded-full flex gap-1 items-center  ">
                      <div className=" relative h-full overflow-hidden ">
                        <span className="h-full flex items-center translate-y-0 group-hover/item:-translate-y-full transition-all duration-200 ease-in-out">
                          <Icon name={icon} />
                        </span>
                        <svg
                          className="h-full translate-y-0  group-hover/item:-translate-y-full transition-all duration-200 ease-in-out"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 15l6 -6" />
                          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                      </div>
                      <span className=" text-sm">{name}</span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className=" w-full flex justify-center gap-6">
            <LinkStyled
              text={data?.urlSite ? 'Site' : 'Demo'}
              href={data?.urlSite || data?.urlDemo || ''}
            >
              <Icon name="www-icon" />
            </LinkStyled>
            <LinkStyled text="Repo" href={data?.urlRepo || ''}>
              <Icon name="github" />
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
