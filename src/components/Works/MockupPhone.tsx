import React from 'react'
import Image from 'next/image'
import mockupPhone from '/public/images/iphone-mockup.webp'

export default function MockupPhone({
  mobileImage,
  title,
}: {
  mobileImage: string
  title: string
}) {
  return (
    <div className=" absolute bottom-0 translate-y-8 -translate-x-4 right-0 w-1/3 h-full content-normal">
      <Image
        className=" absolute top-0 z-30 w-full h-auto object-cover"
        src={mockupPhone}
        alt="Image mockup iPhone"
      />
      <Image
        className=" mt-1 object-top object-cover rounded-[12%]"
        src={mobileImage}
        alt={`Mobile Image ${title}`}
        fill
      />
    </div>
  )
}
