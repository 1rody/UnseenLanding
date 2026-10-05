'use client'

import Image from "next/image"

export default function Transition() {

    return (
        <>
            <section id="transition" className="flex flex-col w-full">
                <Image className="w-full" src="/assets/waves.svg" width={1000} height={1000} alt="Waves" />
                <div className="w-full bg-brand h-screen -mt-5 flex flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2 h-fit items-center mt-15 mb-30 lg:mb-0 lg:mt-90 flex">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl -left-25 sm:-left-20 lg:-left-60 z-10 absolute rotate-90 text-black font-extrabold font-inter">EXISTING IDEAS</h2>
                        <div className="flex saturate-150 mt-2 lg:-mt-50 left-16 sm:left-24 lg:left-50 relative text-left flex-col p-4 gap-4 sm:gap-6 lg:gap-10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extrabold font-inter">REIMAGINED ON A NEW WAY</h3>
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black font-black p-3 sm:p-4 lg:p-5 bg-accent">LLM COMPATIBILITY</span>
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black font-black p-3 sm:p-4 lg:p-5 bg-accent">EMAIL, CALENDAR, NOTES</span>
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black font-black p-3 sm:p-4 lg:p-5 bg-accent">PERFORMANCE & COMPATIBILITY</span>
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black font-black p-3 sm:p-4 lg:p-5 bg-accent">AND PRIVACY FIRST.</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-fit mt-20 lg:mt-90 lg:absolute lg:right-0 flex items-center justify-center text-left text-white p-5 sm:p-8 lg:p-10">
                        <Image className="w-full max-w-[500px] lg:w-fit lg:max-w-none absolute right-0 z-10" src="/assets/blackcorrupt.svg" width={1000} height={1000} alt="Waves" />
                        <h3 className="relative right-0 z-20 w-full text-right text-lg sm:text-xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do.Lorem i <br />psum dolor sit amet,<br /> consectetur adipiscing elit, <br /> sed do.Lorem <br /> ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br />sed do.Lorem <br />ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</h3>
                    </div>
                </div>
                <Image className="w-full rotate-180 -mt-5" src="/assets/waves.svg" width={1000} height={1000} alt="Waves" />
            </section>
        </>
    )
}