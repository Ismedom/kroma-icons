"use client";

import React, { createContext, useState, ReactNode } from "react";

interface SearchFilterContextState {
    searchValue: string;
    filter: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: SearchFilterContextState = {
    searchValue: "",
    filter: "",
    setSearchValue: () => {},
    setFilter: () => {},
};

export const SearchFilterContext = createContext<SearchFilterContextState>(initialState);

const Provider = ({ children }: { children: ReactNode }) => {
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");

    const value = { searchValue, setSearchValue, filter, setFilter };

    return <SearchFilterContext.Provider value={value}>{children}</SearchFilterContext.Provider>;
};

export default Provider;
