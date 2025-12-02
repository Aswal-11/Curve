import React from 'react'

export default function Page() {
  return (
    <div className=" bg-white pt-7">
      {/* Header Section */}
      <div className="flex justify-center items-center sm:py-1 lg:py-3">
        <p className='font-bold text-lg sm:text-xl md:text-5xl lg:text-4xl xl:text-6xl text-center'>
          We Shape with Crecent Curve of
        </p>
      </div>

      <div className='flex justify-center items-center font-bold w-full'>
        <div className='flex justify-center items-center mx-nine mx-ten md:w-4/5 lg:w-3/6 gap-2 md:gap-6 lg:gap-2 xl:gap-2'>
          <p className='w-2/5 md:w-2/5 lg:w-2/5  max-sm:text-right md:text-right text-lg sm:text-xl md:text-5xl lg:text-4xl xl:text-[62px]'>Tomorrow's</p>
          <div className='w-4/5 md:w-3/5 lg:w-3/5'>
            <div className="relative h-7 md:h-14 xl:h-18 flex w-full items-center justify-center overflow-hidden border-[0.5px] rounded-full text-[19px] sm:text-2xl md:text-[52px] lg:text-[40px] xl:text-[70px] inset-0 ">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 opacity-0">
                  INNOVATION
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-0">
                  EXCELLENCE
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600 opacity-0">
                  SUCCESS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Animation Section */}


    </div>
  )
}