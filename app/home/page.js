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

      <div className='flex justify-center mx-nine mx-ten md:mx-5'>
        <div className='w-5/6 md:w-4/5 lg:w-4/7 flex justify-center items-center font-bold'>
          <p className='w-1/2 max-sm:text-center md:text-center text-lg  sm:text-xl md:text-5xl lg:text-4xl xl:text-6xl'>Tomorrow's</p>
          <div className=' w-1/2'>
            <div className="relative h-6 md:h-14 xl:h-20 flex w-full items-center justify-center overflow-hidden border-[0.5px] rounded-full text-xl sm:text-2xl md:text-[52px] lg:text-[40px] xl:text-7xl ">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 opacity-0">
                  Innovation
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-0">
                  Excellence
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="roll-text roll-text-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600 opacity-0">
                  Success
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