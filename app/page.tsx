"use client";

import React, { useContext } from "react";
import iconsListInformation from "../iconsDetails.json";
import search from "@/functions/search";
import { SearchFilterContext } from "@/provider/Provider";

const Page = () => {
    const { searchValue } = useContext(SearchFilterContext);
    return (
        <>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 ">
                {search(iconsListInformation, searchValue).map(({ type, iconName, iconPath, description }, index) => (
                    <article className="border border-gray-300 min-w-[50px] aspect-square flex justify-center items-center rounded-sm select-none cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-out relative">
                        <img key={index} src={`/icons/${type}/${iconPath}`} alt={description} className="size-10" />
                        <p className="text-xs text-gray-600 absolute bottom-4 text-[15px]">{iconName}</p>
                    </article>
                ))}
                {search(iconsListInformation, searchValue).length == 0 && <div>No Icon related</div>}
            </div>
        </>
    );
};

export default Page;
