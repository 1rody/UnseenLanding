import Link from "next/dist/client/link";
import Image from "next/image";
import { lenis } from "../layout/SmoothScroll";

export default function Download() {
    return (
        <section id="download" className="h-screen w-full flex flex-col text-center items-center justify-center">
                <Image className="lg:w-80 md:w-40 sm:w-40 w-35" src="/assets/UnseenBrand.svg" alt="Unseen brand" width={1000} height={1000} ></Image>
                <h3 className="text-3xl  sm:text-6xl md:text-7xl lg:text-5xl font-black scale-95 font-inter hover:scale-102 duration-300 text-brand">
                    CREATING AN NEW PERSPECTIVE...
                </h3>
                <p className="text-xl sm:text-xl md:text-xl lg:text-xl font-light text-gray-300 mt-4">
                    WONDERFUL TOOLS. IN ONE PLACE
                </p>
                <div className="mt-8 flex w-full items-center justify-center h-fit">
                    <Link href="#download" onClick={() => lenis?.scrollTo("#download")} className="hover:scale-105 active:rounded-4xl border border-brand text-white font-black font-inter lg:text-xl text-sm px-5 py-3 rounded-2xl transition-transform duration-200 active:scale-90 hover:bg-brand hover:text-black"  >
                        DOWNLOAD NOW 
                    </Link>
                </div>
        </section>
    )
}