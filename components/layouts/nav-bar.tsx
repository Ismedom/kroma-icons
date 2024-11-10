"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Overlay from "../Overlay";
import { Button } from "../ui/button";

const navigationbarList = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "docs",
        path: "/docs",
    },
    {
        name: "our guide",
        path: "/guide",
    },
    {
        name: "about us",
        path: "/about-us",
    },
];

const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActivePath = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <>
            <nav className="flex items-center justify-between gap-4 px-4 py-4 pt-8 md:max-w-[80%] mx-auto">
                <div className="flex justify-between items-center gap-4">
                    <Link href="/" className="text-sky-600 font-bold text-2xl first-letter:text-orange-400">
                        Kroma
                    </Link>
                    {/*for big screen */}
                    <div className="hidden sm:flex">
                        {navigationbarList.map(({ name, path }, index) => (
                            <Link
                                className={`capitalize px-3 ${
                                    isActivePath(path) ? "text-gray-700" : "text-gray-500"
                                } hover:text-gray-800 transition-colors`}
                                key={index}
                                href={path}>
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3 min-[100px] max-w-[500px]">
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
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="sm:hidden bg-transparent bg-gray-100 hover:bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="gray"
                            className="size-8">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </Button>
                </div>
            </nav>

            {/* for small screen */}
            <div className="sm:hidden fixed left-0 top-0 bottom-0 bg-green-500 z-[1000]">
                {isOpen && <Overlay onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/50" />}

                <div
                    className={`absolute left-0 top-0 bottom-0 w-44 bg-background flex flex-col h-full py-8 transform transition-transform duration-150 ease-in-out ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/"
                        className="text-sky-600 font-bold text-2xl first-letter:text-orange-400 px-4">
                        Kroma
                    </Link>
                    {navigationbarList.map(({ name, path }, index) => (
                        <Link
                            onClick={() => setIsOpen(false)}
                            className={`capitalize px-4 py-2 pr-6 ${
                                isActivePath(path) ? "text-gray-700" : "text-gray-500"
                            } hover:text-gray-800 transition-colors`}
                            key={index}
                            href={path}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavBar;
