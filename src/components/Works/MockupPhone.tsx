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
    <div className=" absolute bottom-0 translate-y-12  overflow-hidden -translate-x-4 right-0 w-1/3 max-w-[100px] h-fit content-normal   rounded-xl">
      <Image
        className="  top-0 z-50 w-full h-auto object-cover"
        src={mockupPhone}
        alt="Image mockup iPhone"
      />
      <Image
        className="absolute -z-10 mt-1 px-1 object-top object-cover rounded-xl"
        src={mobileImage}
        alt={`Mobile Image ${title}`}
        fill
      />
    </div>
  )
}
