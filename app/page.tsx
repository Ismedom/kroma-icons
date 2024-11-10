import React from "react";
import iconsListInformation from "../iconsDetails.json";
// import CopySvgIcon from "@/components/copy";

const Page = () => {
    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 ">
                {iconsListInformation.map(({ type, iconName, iconPath, description }, index) => (
                    <article className="border border-gray-300 min-w-[50px] aspect-square flex justify-center items-center rounded-sm select-none cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-out relative">
                        <img key={index} src={`/icons/${type}/${iconPath}`} alt={description} className="size-12" />
                        <p className="text-xs text-gray-600 absolute bottom-4 text-[15px]">{iconName}</p>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Page;
