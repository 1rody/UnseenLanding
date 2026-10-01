'use client'

import Image from "next/image"
export default function About() {
    return (
        <>
        <section id="about" className="h-screen p-10 lg:text-left text-center flex items-center lg:flex-nowrap flex-wrap justify-center w-full">
            <div className="lg:w-1/2 w-full p-5 flex flex-col">
                <h2 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-black"> EVERITHING NEEDED. IN ONE PLACE.</h2>
                <p  className="text-white text-2xl">Sync DIFERENT ECOSYSTEMS in one app.</p>
                <article  className="text-white mt-5 lg:text-4xl md:text-3xl sm:text-xl text-lg">
                    Lorem ipsum dolor sit, amet <span className="bg-brand text-black">consectetur</span> adipisicing elit. Debitis voluptatem quas exercitationem eveniet magnam ut qui officiis a, dolores, officia at reprehenderit et amet quaerat quam eius quidem! Quas, libero?
                </article>
            </div>
            <div className="lg:w-1/2 w-full z-5 p-5 flex flex-col">
                <Image className="w-full border-1 border-brand rounded-2xl hover:scale-105 active:scale-95 duration-200" src="/assets/skr.png" width={1000} height={1000} alt="UnseenApp image"></Image>
            </div>
        </section>
        </>
    )
}