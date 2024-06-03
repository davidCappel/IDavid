import Hero from "@/components/Hero";
import Zero from "@/components/Zero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        <div className=" w-full dark:bg-black bg-white bg-opacity-10 min-h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center min-h-screen dark:bg-black bg-gradient-to-br from-pink-300 via-white to-purple-600   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full">
        <Zero></Zero>
        </div>
      </div>
    </div>
    </main>
  );
}
