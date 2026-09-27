'use client'

import Image from "next/image"
export default function Transition() {
    return (
        <>
        <section id="transition" className=" flex-col flex  w-full">
            <Image className="w-full" src="/assets/waves.svg" width={1000} height={1000} alt="Waves"></Image>
            <div className=" w-full bg-brand h-screen -mt-5 flex flex-col">

            </div>
            <Image className="w-full rotate-180 -mt-5" src="/assets/waves.svg" width={1000} height={1000} alt="Waves"></Image>
        </section>
        </>
    )
}