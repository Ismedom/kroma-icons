"use client";
import Link from "next/link";

import React from "react";
import { Input } from "../ui/input";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between gap-4 px-4 py-4 pt-8   md:max-w-[80%] mx-auto">
            <div className="flex justify-between items-center min-w-[60%] max-w-[80%] md:max-w-[50%] gap-4">
                <Link href="/" className="text-sky-600 font-bold text-2xl first-letter:text-orange-400">
                    Kroma
                </Link>
                <Input placeholder="Type something..." type="search" />
            </div>
            <div className="flex gap-3 min-[100px] max-w-[500px]">
                <p className="text-gray-600">Help us to Improve </p>
                <Link href="https://github.com/Ismedom/kroma-icons" target="_blank" className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-gray-700">
                        <path d="M12 0.3C5.3 0.3 0 5.6 0 12.3c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.1.8 2.6 1 .3-.8.4-1.3.8-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.2-3.5-.2-.4-.6-1.7.1-3.4 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5s2.2.2 3.2.5c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.3 3 .1 3.4.7 1 1.2 2.1 1.2 3.5 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.1.9 2.2v3.2c0 .3.2.6.8.5 4.7-1.6 8.1-6.1 8.1-11.4 0-6.7-5.4-12-12-12z" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
