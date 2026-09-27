'use client'

import { lenis } from "@/src/components/layout/SmoothScroll"
import { motion } from "motion/react";
import { useEffect } from "react";
import { UseScrollOptions } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function Hero() {
    return (
        
        <section className="h-screen no-select w-full flex items-center justify-center">
            <Image className="relative top-30" alt="Sync" width={30} height={30} src="/assets/SincBars.svg"></Image>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center">
                <p className="text-9xl scale-95 font-inter hover:scale-102 duration-300  -mb-5 text-brand">
                    SYNC EVERITHING.
                </p>

                <h1 className="text-9xl font-inter hover:scale-110 duration-300 font-black text-brand">
                    SYNC EVERITHING.
                </h1>

                <p className="text-9xl scale-95 font-inter hover:scale-102 duration-300  -mt-5 text-brand">
                    SYNC EVERITHING.
                </p>
                <div className="mt-8 flex w-full items-center justify-center h-fit">
                    <Link href="#download"   onClick={() => lenis?.scrollTo("#download")} className="hover:scale-105 active:rounded-4xl border border-brand text-white font-black font-inter text-xl px-5 py-3 rounded-2xl transition-transform duration-200 active:scale-90 hover:bg-brand hover:text-black">DIVE IN A UNSEEN WORLD...</Link>                
                </div>
            </motion.div>
            <Image className="relative bottom-40" alt="Sync" width={30} height={30} src="/assets/SincBars.svg"></Image>

        </section>
    )
}