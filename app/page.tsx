"use client";

import React, { useContext } from "react";
import iconsListInformation from "../iconsDetails.json";
import search from "@/functions/search";
import { SearchFilterContext } from "@/provider/Provider";
import ModalDetailIcon from "@/components/ModalDetailIcon";
import Overlay from "@/components/Overlay";
import { Input } from "@/components/ui/input";

const Page = () => {
    const { searchValue, detailsIconById, setDetailsIconById, setSearchValue } = useContext(SearchFilterContext);

    const iconDetails = detailsIconById ? iconsListInformation.find((item) => item.id === detailsIconById) : null;

    return (
        <>
            <div className="mb-5 mt-2 sticky top-[85px] bg-background z-[100]">
                <Input
                    className="py-5"
                    onChange={(e) => setSearchValue(e.currentTarget.value)}
                    placeholder="Type something..."
                    type="search"
                />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 pb-8">
                {search(iconsListInformation, searchValue).map(({ id, type, iconPath, description }, index) => (
                    <article
                        onClick={() => setDetailsIconById(id)}
                        id={id}
                        key={index}
                        className="border border-gray-300 min-w-[80px] aspect-square flex justify-center items-center rounded-sm select-none cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-out relative">
                        <img src={`/icons/${type}/${iconPath}`} alt={description} className="size-10" />
                        <p className="text-xs text-gray-600 absolute bottom-4 text-[15px]">{iconPath.split(".")[0]}</p>
                    </article>
                ))}
                {search(iconsListInformation, searchValue).length === 0 && <div>No Icon related</div>}
            </div>

            {iconDetails && (
                <div className="fixed flex justify-center items-center inset-0 transition-all duration-150 ease-in-out z-[1200]">
                    <Overlay onClick={() => setDetailsIconById("")} />
                    <div className="relative z-50 bg-background min-w-[90] sm:min-w-[450px] px-5 py-6 rounded-md">
                        <ModalDetailIcon
                            id={iconDetails.id}
                            type={iconDetails.type}
                            iconName={iconDetails.iconPath.split(".")[0]}
                            iconPath={iconDetails.iconPath}
                            description={iconDetails.description}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
