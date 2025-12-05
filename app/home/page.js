import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
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

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-3 font-bold bg-clip-text text-white">
                  DESIGN
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
    </div>
  )
}