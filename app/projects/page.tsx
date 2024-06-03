import React from 'react'
import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
IconClipboardCopy,
IconFileBroken,
IconSignature,
IconTableColumn } from '@tabler/icons-react'
import Image from 'next/image'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const page = () => {
  return (
    <main className="">
        <div className=" w-full dark:bg-black bg-white bg-opacity-10 min-h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center min-h-screen dark:bg-black bg-gradient-to-br from-pink-300 via-white to-purple-600   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" w-full sm:mt-[70px]">
        <BentoGrid className="max-w-4xl scale-[85%] shadow-xl ">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        ))}
    </BentoGrid>
        
        </div>
        <div className='w-full bg-black rounded-xl shadow-2xl '>
          Footer
        </div>
      </div>
    </div>
    </main>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const Skeleton2 = ({img,destination, title, styles='flex justify-center w-full h-full min-h-[6rem] max-h-[150px] ring-2 ring-purple-200 max-w-[370px] md:max-w-[200px] rounded-xl'}:{
  img:string,
  destination:string,
  title:string,
  styles?:string,

})=>(
  <a href={destination} target="_blank">
    <DirectionAwareHover imageUrl={img} className={styles}>
      <p>{title}</p>
    </DirectionAwareHover>
  </a>
)

const items = [
  {
    title: "Portfolio Website",
    description: "Application Detailing My Experience and Skill | May 2024 - Present",
    header: <Skeleton2 img='/David.webp' destination='https://github.com/davidCappel/IDavid' title='My Portfolio' /> ,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Banking Application",
    description: "Used Object Oriented Programming concepts to create | Nov - Dec 2023",
    header: <Skeleton2 img='/panama-bank-account.jpg' destination='https://github.com/davidCappel?tab=repositories' title='Banking Project' />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Todo Application",
    description: "Simple Todo list Application | Mar - May-2024",
    header: <Skeleton2 img='/Checklist.webp' destination='https://github.com/davidCappel/todo2' title='Sample Todo App' />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Self Improvement Website Application",
    description:
      "Website Centered around the Betterment of boys in our society | Oct 2022 - April 2023 ",
    header: <Skeleton2 img='/selfimprovement.jpeg' destination='https://github.com/davidCappel/Self-Improvement-Website' title='Self-Improvement Website' styles='flex justify-center w-full h-full min-h-[6rem] ring-2 ring-purple-200 max-h-[150px] max-w-[370px] md:mx-auto rounded-xl' />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nike Landing Page",
    description: "Learning React, and Tailwind CSS | Mar 2023 - Present",
    header: <Skeleton2 img='/download.jpeg' destination='https://github.com/davidCappel?tab=repositories' title='Nike Landing Page'/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Website Redesign",
    description: "Learned Figma and Designed this UI | Jan - Feb 2024",
    header: <Skeleton2 img='/WebsturantFix.jpeg' destination='https://www.figma.com/proto/tVt8PVK7KuIxRfabqXtHM8/WebsturantStoreRedesign-layout.?node-id=2502-442&t=0uTCI2IQmk9iavwv-1' title='Websiturant Store Redesign' />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sneaker Web Scrapping App",
    description: "Implimenting Python Web Scraping to create this web Page | Sep 2023 - Present",
    header: <Skeleton2 img='/jordan-4.jpeg'destination='https://github.com/davidCappel/Shoe-Website' title='Sneaker Website' styles='flex justify-center w-full h-full min-h-[6rem] ring-2 ring-purple-200 max-h-[150px] max-w-[370px] md:mx-auto rounded-xl' />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];





export default page