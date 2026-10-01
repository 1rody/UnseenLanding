'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Navigation() {
    return (
        <> 
        <motion.header  initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="p-5 fixed w-full z-50">
            <nav  className="w-full">
                <ol className="w-full flex justify-between items-center">
                    <li>
                        <Link className="text-white font-inter font-black text-2xl" href="/"><Image className="lg:w-50 md:w-30 sm:w-30 w-25" src="/assets/UnseenBrand.svg" alt="Unseen brand" width={1000} height={1000} ></Image></Link>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                        <div className="h-1 rounded-2xl lg:w-30 sm:w-20 md:w-20 w-5 bg-brand ">

                        </div>
                        <div className="flex flex-col">
                            <p className="bg-brand font-inter font-black lg:text-2xl md:text-xl sm:text-lg text-sm">AN UNIFIED OCEAN OF IDEAS</p>
                        </div>
                    </li>
                </ol>
            </nav>
        </motion.header >
        <motion.aside initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center lg:justify-start">
            <nav className="w-full p-4 sm:p-5 lg:w-fit">
                <ol className="flex items-center justify-center gap-2 text-sm font-black sm:gap-3 sm:text-base lg:gap-5 lg:text-2xl">
                    <li className="rounded-2xl bg-brand px-3 py-2 text-black duration-200 sm:px-4 lg:px-5">
                        <Link href="https://github.com/1rody/UnseenTools" target="_blank" rel="noopener noreferrer">
                            GITHUB
                        </Link>
                    </li>
                    <li className="rounded-4xl px-3 py-2 duration-200 hover:rounded-2xl text-white hover:bg-brand hover:text-black sm:px-4 lg:px-5">
                        <Link href="#about">ABOUT</Link>
                    </li>
                    <li className="rounded-4xl px-3 py-2 duration-200 hover:rounded-2xl text-white hover:bg-brand hover:text-black sm:px-4 lg:px-5">
                        <Link href="#download">DOWNLOAD</Link>
                    </li>
                </ol>
            </nav>
        </motion.aside>
        </>
    )
}