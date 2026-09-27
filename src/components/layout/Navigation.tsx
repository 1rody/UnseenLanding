'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Navigation() {
    return (
        <> 
        <motion.header  initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="p-5 fixed w-full">
            <nav  className="w-full">
                <ol className="w-full flex justify-between items-center">
                    <li>
                        <Link className="text-white font-inter font-black text-2xl" href="/"><Image className="w-50" src="/assets/UnseenBrand.svg" alt="Unseen brand" width={1000} height={1000} ></Image></Link>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                        <div className="h-1 rounded-2xl w-30 bg-brand ">

                        </div>
                        <div className="flex flex-col">
                            <p className="bg-brand font-inter font-black text-2xl">AN UNIFIED OCEAN OF IDEAS</p>
                        </div>
                    </li>
                </ol>
            </nav>
        </motion.header >
        <motion.aside  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed left-0 bottom-0">
            <nav className=" p-5 w-full text-white">
                <ol className="flex gap-5 text-2xl font-black">
                    <li className="bg-brand text-black rounded-2xl duration-200 py-2 px-3">
                        <Link href="/">GITHUB</Link>
                    </li>
                    <li className="hover:bg-brand hover:text-black hover:rounded-2xl duration-200 rounded-4xl py-2 px-3">
                        <Link href="/">ABOUT</Link>
                    </li>
                    <li className="hover:bg-brand hover:text-black hover:rounded-2xl duration-200 rounded-4xl py-2 px-3">
                        <Link href="/">DOWNLOAD</Link>
                    </li>
                </ol>
            </nav>
        </motion.aside>
        </>
    )
}