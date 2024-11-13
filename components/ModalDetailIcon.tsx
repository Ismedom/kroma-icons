import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import downloadSvgFile from "@/functions/downloadSvg";
import copySvg from "@/functions/copySvgText";
// import dynamic from "next/dynamic";

// const LoadingSpinner = () => (
//     <div className="flex justify-center items-center">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-700"></div>
//     </div>
// );

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
    // const IconComponent = dynamic(() => import(`/public/icons/${type}/${iconPath}`).catch(() => null), {
    //     loading: () => <LoadingSpinner />,
    //     ssr: false,
    // });

    return (
        <div className="w-full" id={id}>
            <div className="flex flex-col justify-center items-center">
                <Image src={`/icons/${type}/${iconPath}`} alt={iconName} width={100} height={100} />

                <h3 className="first-letter:uppercase font-semibold text-gray-600">{iconName}</h3>
                <p className="text-gray-500">{description}</p>
                <div className="flex gap-2 justify-center mt-6 pt-3 border-t border-t-gray-400 w-full">
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
