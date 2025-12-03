import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className="pt-7">
      {/* Header Section */}
      <div className="flex justify-center items-center sm:py-1 lg:py-3">
        <p className='font-bold text-lg text-white sm:text-xl md:text-5xl lg:text-4xl xl:text-6xl text-center'>
          We Shape with Crecent Curve of
        </p>
      </div>

      <div className='flex justify-center items-center font-bold w-full lg:px-14'>
        <div className='flex justify-center items-center mx-nine mx-ten md:w-4/5 lg:w-3/6 gap-3 md:gap-6 lg:gap-2 xl:gap-2'>
          <p className='w-2/5 md:w-2/5 lg:w-2/5 text-white max-sm:text-right md:text-right text-lg sm:text-xl md:text-5xl lg:text-4xl xl:text-[62px]'>Tomorrow's</p>
          <div className='w-4/5 md:w-3/5 lg:w-3/5'>
            <div className="relative h-7 md:h-14 xl:h-18 flex w-full items-center justify-center overflow-hidden border-[0.5px] rounded-full text-[19px] sm:text-2xl md:text-[52px] lg:text-[40px] xl:text-[70px] inset-0 ">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-1 font-bold bg-clip-text text-white">
                  INNOVATION
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-2 font-bold bg-clip-text text-white">
                  EXCELLENCE
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-3 font-bold bg-clip-text text-white">
                  SUCCESS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-10 text-white'>
        <p className='text-center font-[] text-xl text-wrap w-1/2 md:w-full'>Shaping tomorrow with creativity, innovation, and purpose.</p>
      </div>
      {/* <div className='animate-rotate-border bg-conic/[from_var(--border-angle)] flex justify-center items-center pt-12 text-xl font-bold'>
        <div className='flex border rounded-full justify-center items-center p-5 md:p-3 gap-4'>
          <p>Let's Talk</p>
          <div className="bg-[radial-gradient(circle,#626DFF,#2331F3)] relative w-[30px] h-[30px] bg-black rounded-full  rotate-45 group-hover:rotate-0 transition-all delay-150 duration-1000 flex items-center ">
            <Image src="/arrow.svg" alt="Arrow" fill className="object-contain" />
          </div>
        </div>
      </div> */}

      <div className='flex justify-center items-center pt-12'>
        <div className=" flex group justify-center items-center gap-4 rounded-4xl bg-white py-2 px-3 ">
          <Button className="bg-transparent hover:bg-transparent p-1 text-black text-lg">
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