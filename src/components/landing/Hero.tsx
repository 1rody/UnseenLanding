'use client'

import { lenis } from "@/src/components/layout/SmoothScroll"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative flex h-screen w-full items-center justify-center overflow-hidden no-select">
            <div className="hero-particles" aria-hidden="true">
                <div className="particle particle-01" />
                <div className="particle particle-02" />
                <div className="particle particle-03" />
                <div className="particle particle-04" />
                <div className="particle particle-05" />
                <div className="particle particle-06" />
                <div className="particle particle-07" />
                <div className="particle particle-08" />
                <div className="particle particle-09" />
                <div className="particle particle-10" />
                <div className="particle particle-17" />
                <div className="particle particle-18" />
                <div className="particle particle-19" />
                <div className="particle particle-20" />
                <div className="particle particle-21" />
                <div className="particle particle-22" />
                <div className="particle particle-23" />
                <div className="particle particle-28" />
                <div className="particle particle-29" />
                <div className="particle particle-30" />
            </div>
            <Image className="relative z-10 top-30" alt="Sync"  width={30} height={30} src="/assets/SincBars.svg"/>
            <motion.div  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{  duration: 0.8,  ease: "easeOut", }} className="relative z-20 text-center" >
                <p className="text-3xl  sm:text-6xl md:text-7xl lg:text-8xl scale-95 font-inter hover:scale-102 duration-300 lg:-mb-5 text-brand">
                    SYNC EVERYTHING.
                </p>

                <h1 className="text-3xl  sm:text-6xl md:text-7xl lg:text-8xl hover:wiggle font-inter hover:scale-110 duration-300 font-black text-brand">
                    SYNC EVERYTHING.
                </h1>

                <p className="text-3xl  sm:text-6xl md:text-7xl lg:text-8xl scale-95 font-inter hover:scale-102 duration-300 lg:-mt-5 text-brand">
                    SYNC EVERYTHING.
                </p>
                <div className="mt-8 flex w-full items-center justify-center h-fit">
                    <Link href="#download" onClick={() => lenis?.scrollTo("#download")} className="hover:scale-105 active:rounded-4xl border border-brand text-white font-black font-inter lg:text-xl text-sm px-5 py-3 rounded-2xl transition-transform duration-200 active:scale-90 hover:bg-brand hover:text-black"  >
                        DIVE IN A UNSEEN WORLD...
                    </Link>
                </div>
            </motion.div>
            <Image className="relative z-10 bottom-40"  alt="Sync" width={30}height={30} src="/assets/SincBars.svg"/>
        </section>
    )
}