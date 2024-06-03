import React from 'react'
import { CardStackDemo } from './testimonials'


const page = () => {
  return (
    <main>
     
        <div className=" w-full dark:bg-black bg-white bg-opacity-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center min-h-screen">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gradient-to-br from-purple-600 via-white to-pink-300 min-h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className=' absolute'>
            <div>
            <CardStackDemo></CardStackDemo>
           </div>

            
          </div>
        </div>
        
      
    </main>
  )
}

export default page