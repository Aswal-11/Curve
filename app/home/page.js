import React from 'react'

export default function Page() {
  return (
    <div className=" bg-white pt-14">
      {/* Header Section */}
      <div className="flex justify-center items-center py-2">
        <p className='font-bold text-xl lg:text-6xl text-center'>
          We Shape with Crecent Curve of
        </p>
      </div>

      <div className='flex justify-center'>
        <div className='w-4/6 lg:w-4/7 flex justify-center items-center font-bold '>
          <p className='w-1/2 text-center text-xl lg:text-6xl '>Tomorrow's</p>
          <div className=' w-1/2 '>
            <div className="relative h-8 lg:h-20 flex w-full items-center justify-center overflow-hidden border-2 rounded-full text-[22px] lg:text-7xl">
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