"use client";

import React, { useContext, useMemo } from "react";
import iconsListInformation from "../iconsDetails.json";
import search from "@/functions/search";
import { SearchFilterContext } from "@/provider/Provider";
import ModalDetailIcon from "@/components/ModalDetailIcon";
import Overlay from "@/components/Overlay";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

interface IconInformation {
    id: string;
    type: string;
    iconPath: string;
    description: string;
}

interface IconComponents {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> & { preload?: () => void };
}

interface SearchFilterContextType {
    searchValue: string;
    detailsIconById: string | null;
    setDetailsIconById: (id: string) => void;
    setSearchValue: (value: string) => void;
}

const Page = () => {
    const { searchValue, detailsIconById, setDetailsIconById, setSearchValue } = useContext(
        SearchFilterContext
    ) as SearchFilterContextType;

    const IconComponents = useMemo<IconComponents>(() => {
        const components: IconComponents = {};
        iconsListInformation.forEach(({ type, iconPath }: IconInformation) => {
            components[`${type}/${iconPath}`] = dynamic(() => import(`/public/icons/${type}/${iconPath}`), {
                ssr: false,
            });
        });
        return components;
    }, []);

    const iconDetails = detailsIconById
        ? iconsListInformation.find((item: IconInformation) => item.id === detailsIconById)
        : null;

    const handleMouseEnter = (type: string, iconPath: string): void => {
        const IconComponent = IconComponents[`${type}/${iconPath}`];
        if (IconComponent && typeof IconComponent.preload === "function") {
            IconComponent.preload();
        }
    };

    //

    return (
        <>
            <div className="mb-5 mt-2 sticky top-[85px] bg-background z-[100]">
                <Input
                    className="py-5"
                    value={searchValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)}
                    placeholder="Type something..."
                    type="search"
                />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 pb-8">
                {search(iconsListInformation, searchValue).map(({ id, type, iconPath }: IconInformation) => {
                    const IconComponent = IconComponents[`${type}/${iconPath}`];

                    return (
                        <article
                            className="border border-gray-300 min-w-[80px] aspect-square flex justify-center items-center rounded-sm select-none cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-out relative"
                            id={id}
                            key={id}
                            onClick={() => setDetailsIconById(id)}
                            onMouseEnter={() => handleMouseEnter(type, iconPath)}>
                            <div className="w-10 relative">
                                <IconComponent />
                            </div>
                            <p className="text-xs text-gray-600 absolute bottom-4 text-[15px]">
                                {iconPath.split(".")[0]}
                            </p>
                        </article>
                    );
                })}
                {search(iconsListInformation, searchValue).length === 0 && <div>No Icon related</div>}
            </div>

            {iconDetails && (
                <div className="fixed flex justify-center items-center inset-0 transition-all duration-150 ease-in-out z-[1200]">
                    <Overlay onClick={() => setDetailsIconById("")} />
                    <div className="relative z-50 bg-background min-w-[90%] sm:min-w-[450px] px-5 py-6 rounded-md">
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
