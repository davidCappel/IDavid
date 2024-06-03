import AINow from '@/components/Blog-Components/AINow'
import Community from '@/components/Blog-Components/Community'
import DesignInsp from '@/components/Blog-Components/DesignInsp'
import MyProcess from '@/components/Blog-Components/MyProcess'
import PandP from '@/components/Blog-Components/PandP'
import WellRound from '@/components/Blog-Components/WellRound'
import React from 'react'



const page = ({params}:{
  params:any
}) => {

  const setInfoFunction =({pageId}:{pageId:string})=>{
    if(pageId === "Programming-Community"){
      return(
        <Community></Community>
        
      )
    }
    else if(pageId === "Poetry-Programming"){
      return(
        <PandP></PandP>
       
      )
      
    }
    else if(pageId === "Ai-Future"){
      return(
        <AINow></AINow>
        
      )
    }
    else if(pageId === "DesignInspo"){
      return(
        <DesignInsp></DesignInsp>
        
      )
    }
    else if(pageId === "My-Process"){
      return(
        <MyProcess></MyProcess>
        
      )
    }
    else if(pageId === "Well-Rounded"){
      return(
        <WellRound></WellRound>
        
      )
    }
    else{
      return(
        "Not Quite yet Buddy"
      )
    }


  }

  
  return (
    <main className="">
    <div className=" w-full dark:bg-black bg-white bg-opacity-10 min-h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center min-h-screen dark:bg-black bg-gradient-to-br from-purple-600 via-white to-pink-300   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
         <div className='text-white bg-black mx-auto p-4 rounded-xl ring-1 ring-white mt-[200px] '>
          {setInfoFunction({pageId:params.id})}

         </div>
          
    
      </div>
    </div>
  </main>
  )
}

export default page