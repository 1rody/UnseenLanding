'use client'

import { motion } from "motion/react";


import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        
        <section className="h-screen w-full flex items-center justify-center">
            <Image className="relative top-50" alt="Sync" width={40} height={30} src="/assets/SincBars.svg"></Image>
            <div className="text-center">
                <p className="text-9xl scale-95 font-inter hover:scale-102 duration-300  -mb-5 text-brand">
                    SYNC EVERITHING.
                </p>

                <h1 className="text-9xl font-inter hover:scale-110 duration-300 font-black text-brand">
                    SYNC EVERITHING.
                </h1>

                <p className="text-9xl scale-95 font-inter hover:scale-102 duration-300  -mt-5 text-brand">
                    SYNC EVERITHING.
                </p>
                <div className="mt-8">
                    <Link href="/" className="border-brand hover:bg-brand hover:animate-bounce duration-200 hover:text-black  active:scale-95 px-5 rounded-2xl py-3 font-black font-inter text-xl border-1 text-brand" href="/">DIVE IN A UNSEEN WORLD...</Link>
                </div>
            </div>
            <Image className="relative bottom-50" alt="Sync" width={40} height={30} src="/assets/SincBars.svg"></Image>

        </section>
    )
}