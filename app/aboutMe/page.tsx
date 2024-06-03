"use client"
import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { Button } from '@/components/ui/moving-border';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

//import { CardStack } from '@/components/ui/card-stack'


const page = () => {

  const words1 = "My journey in the world of programming began at Cheltenham High School. It was here that I first discovered my passion for coding. I quickly fell in love with the challenge and creativity programming offered."
  const words2 = "At Drexel, Ive had the opportunity to work on some really cool projects. One of my favorites was developing a comprehensive banking system using Java, where I applied test-driven development principles and object-oriented programming concepts. Another highlight was redesigning a website with Figma to make it more user-friendly and accessible. These projects have not only sharpened my technical skills but also taught me the importance of teamwork and communication."
  const words3 = "Looking ahead, Im excited to continue my journey in the tech world. I aim to use my skills to develop innovative solutions and work with like-minded individuals to create technology that makes a difference. Each step of my journey, from Cheltenham High to Drexel University, has been driven by a love for programming and a desire to learn and grow, and I cant wait to see where this path takes me next."
  return (
    <main className=''>
     
        <div className=" w-full dark:bg-black bg-white bg-opacity-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center min-h-screen ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gradient-to-br from-purple-600 via-white to-pink-300 min-h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='absolute'>
           {/* <CardStackDemo></CardStackDemo> */}
          
           <div className='md:flex sm:justify-center sm:items-center mt-[500px] md:mt-[200px] mx-4 relative'>
              <Image src="/meWaving.webp" alt='waving' width={300} height={300}
                className=' rounded-md shadow-xl -rotate-3 ring-2 ring-black sm:m-3 md:m-3 lg:m-3 mx-[100px]'
              />

            <div className='bg-black rounded-md p-3 mt-4 max-h-[150px] md:max-w-[525px] md:max-h-[220px] shadow-xl md:mt-9 ring-1 ring-white'>
              <p className='font-bold font-mono md:p-4 text-lg md:text-2xl bg-gradient-to-tr from-slate-400 via-white to-slate-800 text-transparent bg-clip-text'>
                Im a Web Developer and Software engineer who works in the center of Philadelphia, Pennsylvania.
              </p>
              <div className='px-4 pb-2 pt-2 md:pt-[0.5px] text-white flex gap-3'>
                <a href='https://www.instagram.com/david_cappel/' target='_blank'>
                  <FaInstagram/>
                </a>
                <a href="https://github.com/davidCappel" target='_blank'> <FaGithub/> </a>
                <a href="https://www.linkedin.com/in/david-cappel-42859a23a" target='_blank'><FaLinkedin /></a>
            
              </div>
            </div>

           </div>
           <br></br>
           <div className=' bg-black shadow-xl ring-1 ring-white mx-4 rounded-md text-white font-semibold font-sans p-4  '>
            <h1 className=''>
              History:
            </h1>
            <div className='mt-4 '>
                <TextGenerateEffect words={words1} />
              <br/>
                <TextGenerateEffect words={words2}  />
              <br/>
                <TextGenerateEffect words ={words3}  />
          </div>
            
        </div>
           
          
          </div>
        </div>
        
      
    </main>
  )
}

export default page