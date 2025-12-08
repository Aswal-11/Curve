import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  const logos = [
    "/company-logos/network.png",
    "/company-logos/penta.png",
    "/company-logos/product.png",
    "/company-logos/sitemark.png",
    "/company-logos/vision.png",     // hide until md
    "/company-logos/waveless.png",   // hide until md
  ];
  return (
    <div className="pt-7">
      {/* Header Section */}
      <div className="flex justify-center items-center sm:py-1 lg:pt-12">
        <p className='font-bold text-lg text-white sm:text-xl md:text-5xl lg:text-[62.18px] text-center'>
          We Shape with Crecent Curve of
        </p>
      </div>

      <div className='flex justify-center items-center font-bold w-full xl:px-4'>
        <div className='flex justify-center items-center mx-nine mx-ten md:w-6/7 lg:w-6/7 gap-3 md:gap-2 lg:gap-3 xl:gap-4'>
          <p className='w-2/5 md:w-2/5 lg:w-2/5 text-white max-sm:text-right md:text-right text-lg sm:text-xl md:text-5xl lg:text-[62.18px]'>Tomorrow's</p>
          <div className='w-4/5 md:w-3/5 lg:w-4/7'>
            <div className="relative h-7 md:h-14 lg:h-17 xl:h-20 flex w-full items-center justify-center overflow-hidden border-[0.5px] rounded-full text-[19px] sm:text-2xl md:text-[54px] lg:text-[70.63px] inset-0 ">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-1 font-bold bg-clip-text text-white">
                  INNOVATION
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-2 font-bold bg-clip-text text-white">
                  CREATIVITY
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-3 font-bold bg-clip-text text-white">
                  POSSIBILITY
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-5 text-white'>
        <p className='text-center font-mid text-[14px] md:text-xl text-wrap w-2/3 xl:w-full'>Shaping tomorrow with creativity, innovation, and purpose.</p>
      </div>

      <div className='flex justify-center items-center pt-10'>
        <div className=" flex group justify-center items-center gap-4 rounded-4xl bg-white py-1 px-3 ">
          <Button className="bg-transparent font-bold hover:bg-transparent p-1 text-black text-lg md:text-[18.4px]">
            Let's Talk
          </Button>

          <div className=" relative w-[30px] h-[30px] bg-white rounded-full bg-[radial-gradient(circle,#626DFF,#2331F3)]  rotate-45 group-hover:rotate-0 transition-all delay-150 duration-1000 flex items-center ">
            <Image src="/white_arrow.svg" alt="Arrow" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-15 md:pt-22'>
        <div className='w-[95%] md:w-7/8 flex justify-center items-center rounded-3xl animate-rotate-border bg-conic/[from_var(--border-angle)] from-blue-950 via-blue-950 to-white p-px'>
          <div className='w-full rounded-3xl bg-blue-950 md:p-7 py-4 md:py-6'>
            <p className="font-medium text-center text-xs md:text-xl text-white flex justify-center gap-2">
              <span>Trusted By More Than</span>
              <span className="text-blue-600">+10,000</span>
              <span>Clients</span>
            </p>

            <div className="flex flex-wrap md:gap-4 justify-center items-center pt-2 md:pt-5 lg:px-20">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  width={160}
                  height={100}
                  alt=""
                  className={`
                    w-20 h-9 md:w-40 md:h-16
                    ${index >= 4 ? "hidden md:block" : ""}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}