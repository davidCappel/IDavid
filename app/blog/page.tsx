import React from 'react'
import { TbCircleLetterDFilled } from "react-icons/tb";

const page = () => {
  return (
    <main className="">
        <div className=" w-full dark:bg-black bg-white bg-opacity-10 min-h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center min-h-screen dark:bg-black bg-gradient-to-br from-purple-600 via-white to-pink-300   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className='mb-5 text-7xl font-bold font-mono dark:text-white shadow-2xl rounded-xl text-black '>
              <p> This Is My Blog: </p>

            </div>
            <div className=' relative bg-black ring-2 ring-white flex justify-center items-center w-screen max-w-[400px] md:max-w-[800px] lg:max-w-[900px] rounded-xl shadow-2xl mt-[100px]'>
              <div className='p-2 '>
                <h1 className='text-white'> Things I Wrote- </h1>
                <div className='mt-5 md:flex md:justify-between  text-white gap-3'>
                  <div className='md:flex md:flex-col'>
                    <div className='md:flex md:justify-between'>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/Programming-Community'>
                          <p className='font-mono underline decoration-slate-200'>
                          How I get involved in the Programming community
                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/Poetry-Programming'>
                          <p className='font-mono underline decoration-slate-200'>
                          How I Mix poetry and Programming 
                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                    </div>

                    <div className='md:flex md:justify-between'>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/Ai-Future'>
                          <p className='font-mono underline decoration-slate-200'>
                          Why Ai is the Future And How I Impliment that in my Code
                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/DesignInspo'>
                          <p className='font-mono underline decoration-slate-200'>
                          Best Websites I go to when I need new Web design inspiration 

                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                    </div>


                    <div className='md:flex md:justify-between'>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/My-Process'>
                          <p className='font-mono underline decoration-slate-200'>
                          My programming Process
                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                      <div className='ring-1 ring-slate-700 m-3 p-2 rounded-sm md:min-w-[343px] md:max-w-[343px] hover:ring-white hover:bg-slate-700 hover:scale-105 transition duration-300 ease-in-out transform '>
                        <a href='/blog/Well-Rounded'>
                          <p className='font-mono underline decoration-slate-200'>
                          10 things I do to be a more well rounded Programmer
                          </p>
                          <p className='text-sm mt-2 flex'> 
                              by David Cappel<TbCircleLetterDFilled className='ml-2 mt-1 scale-150 bg-gradient-to-tr from-pink-300 via-white to-purple-600 text-black rounded-full' />
                          </p>
                        </a>
                      </div>

                    </div>
                  </div>


                  

                  

                </div>


              </div>
            

            </div>
        
          </div>
        </div>
    </main>
  )
}

export default page