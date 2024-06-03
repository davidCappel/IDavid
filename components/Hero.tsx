"use client"
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import { FlipWords } from './ui/flip-words'

const Hero = () => {

  const words =["Hello", "Goodbye", "Hola", "Adios"]
  return (
    <div>
      <BackgroundGradient>
        <div className=' bg-black rounded-xl'>
          
          <FlipWords words ={words} className='text-white' />
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default Hero