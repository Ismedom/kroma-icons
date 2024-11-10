import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import downloadSvgFile from "@/functions/downloadSvg";
import copySvg from "@/functions/copySvgText";

const ModalDetailIcon = ({
    id,
    type,
    iconName,
    iconPath,
    description,
}: {
    id: string;
    type: string;
    iconName: string;
    iconPath: string;
    description: string;
}) => {
    return (
        <div className="w-full" id={id}>
            <div className="flex flex-col justify-center items-center">
                <Image src={`/icons/${type}/${iconPath}`} alt={iconName} width={100} height={100} />
                <h3 className="first-letter:uppercase font-semibold text-gray-600">{iconName}</h3>
                <p className="text-gray-500">{description}</p>
                <div className="flex gap-2 justify-center  mt-6 pt-3 border-t border-t-gray-400 w-full">
                    <Button className="bg-gray-700" onClick={() => copySvg({ iconName, type })}>
                        Copy svg
                    </Button>
                    <Button className="bg-gray-700" onClick={() => downloadSvgFile({ iconName, type })}>
                        Download svg
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDetailIcon;
