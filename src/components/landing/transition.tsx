'use client'

import Image from "next/image"
export default function Transition() {
    return (
        <>
        <section id="transition" className=" flex-col flex  w-full">
            <Image className="w-full" src="/assets/waves.svg" width={1000} height={1000} alt="Waves"></Image>
            <div className="w-full bg-brand h-screen -mt-5 flex">
                <div className="w-1/2 h-fit items-center mt-90 flex">
                    <h2 className="text-8xl -left-60 z-10 absolute rotate-90 text-black font-extrabold font-inter">
                        EXISTING IDEAS
                    </h2>

                    <div className="flex saturate-150 -mt-50 left-50 relative text-left flex-col p-4 gap-10">
                        <h3 className="text-5xl text-black font-extrabold font-inter">
                            REIMAGINED ON A NEW WAY
                        </h3>
                        <span className="text-5xl text-black font-black p-5 bg-accent">
                            LLM COMPATIBILITY 
                        </span>
                        <span className="text-5xl text-black font-black p-5 bg-accent">
                            EMAIL, CALENDAR,  NOTES
                        </span>
                        <span className="text-5xl text-black font-black p-5 bg-accent">
                            PERFORMACE & COMPATIBILITY
                        </span>
                        <span className="text-5xl text-black font-black p-5 bg-accent">
                            AND PRIVACY FIRST.
                        </span>
                    </div>
                </div>
                <div className="w-1/2 h-fit mt-90 absolute right-0 flex items-center justify-center text-left text-white p-10">
                    <Image className="w-fit absolute right-0 z-10"src="/assets/blackcorrupt.svg" width={1000} height={1000} alt="Waves" />
                    <h3 className="relative right-0  z-20 w-full text-right text-3xl">
                        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br />sed do.Lorem i <br />psum dolor sit amet,<br /> consectetur adipiscing elit, <br /> sed do.Lorem <br />  ipsum dolor sit amet, <br /> consectetur adipiscing elit,  <br />sed do.Lorem  <br />ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.
                    </h3>
                </div>
            </div>
            <Image className="w-full rotate-180 -mt-5" src="/assets/waves.svg" width={1000} height={1000} alt="Waves"></Image>
        </section>
        </>
    )
}