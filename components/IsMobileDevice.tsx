"use client";

import React, { useEffect, useState } from "react";
import { isMobileDevice } from "../utils/detect_mobile_device";
import Overlay from "./Overlay";
import { Button } from "./ui/button";

const IsMobileDevice = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [visiteCount, setvisiteCount] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const visiteTimes = parseInt(localStorage.getItem("_visiteTimes") as string);
        setvisiteCount(visiteTimes);

        setIsMobile(isMobileDevice());
        //
        localStorage.setItem("_visiteTimes", (visiteTimes + 1 || visiteCount).toString());

        //
    }, []);

    return (
        <>
            {isMobile && visiteCount <= 1 && isOpen && (
                <div className="fixed z-[1500] flex justify-center items-center h-full w-full">
                    <Overlay onClick={() => setIsOpen(false)} className="z-[1]" />
                    <div className="bg-gray-100 z-10 p-4 py-6 rounded-md">
                        <h1 className="first-letter:text-orange-600 text-sky-600 font-bold">Kroma Icons</h1>
                        <p>You are opened on Mobile Device, Some feature may doesn't work!</p>
                        <Button onClick={() => setIsOpen(false)} className="bg-green-700 hover:bg-green-600 mt-3">
                            Okay
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default IsMobileDevice;
