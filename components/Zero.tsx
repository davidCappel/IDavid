"use client"
import React from 'react'
import Image from 'next/image'
import { FlipWords } from './ui/flip-words'
import { BackgroundGradient } from './ui/background-gradient'
import { HoverBorderGradient } from './ui/hover-border-gradient'



const Zero = () => {

  const words =["Today", "Tomorrow", "Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday","Saturday"]
  return (
    <main>
      <div className='pb-20 pt-36'>
        <div className='flex justify-center relative my-10 z-10'>
          {/* <BackgroundGradient> */}
          <div className='bg-black p-5 rounded-full w-[400px] md:w-[600px] shadow-2xl opacity-90 ring-1 ring-white h-auto'>
            <div className='px-5 py-8 flex items-center justify-center'>
      
            <HoverBorderGradient as='div' containerClassName='' >
              <a href='https://www.linkedin.com/in/david-cappel-42859a23a' target='_blank'><Image 
              className=' rounded-full h-auto opacity-100 w-[230px] md:w-[300px] '
              src="/David.webp"
              alt='David' 
              width={400} 
              height={500}/>
              </a>
            </HoverBorderGradient>

              {/* <h1 className=' font-semibold flex justify-center bg-gradient-to-br from-slate-400 to-slate-800 text-transparent bg-clip-text' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt quasi, voluptatum, omnis nulla sequi, velit architecto ipsa praesentium reprehenderit vero commodi. Nihil exercitationem, ipsa dolores repellendus illum ab consequatur?
              </h1> */}
            </div>
            <div className='px-10 pb-5 mt-3 flex items-center justify-center text-3xl'>
              <h1 className=' font-semibold flex justify-center bg-gradient-to-br from-slate-400 to-slate-800 text-transparent bg-clip-text' >
                Hi! Im David
              </h1>
           </div>
          
        </div>
        {/* </BackgroundGradient> */}
        
      </div>

      <div className='flex justify-center items-center mt-5 mb-5 mr-3 ml-3 p-4 bg-black rounded-lg w-auto text-3xl opacity-90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,250)] ring-1 ring-white '>
        <div className='font-semibold flex justify-center bg-gradient-to-br from-slate-400 to-slate-800 text-transparent bg-clip-text font-outline-2  '>
         <div>Your Vision, My Code: Empowering Your Digital Journey...
         <FlipWords words={words} className='text-white' duration={4000}/>
         </div>
        </div>
        
        </div>
       
      
    </div>
    </main>
  )
}

export default Zero