'use client'

import Link from "next/link"

export default function Navigation() {
    return (
        <> 
        <header className="p-5 fixed w-full">
            <nav className="w-full">
                <ol className="w-full flex justify-between items-center">
                    <li>
                        <Link className="text-brand font-inter font-black text-2xl" href="/">UNSEEN</Link>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                        <div className="h-1 w-30 bg-brand ">

                        </div>
                        <p className="text-brand font-inter font-black text-2xl">AN UNIFIED OCEAN OF IDEAS</p>
                    </li>
                </ol>
            </nav>
        </header>
        <aside>
            <nav>

            </nav>
        </aside>
        </>
    )
}