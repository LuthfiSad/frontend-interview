import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { useAtom } from "jotai";
import { darkModeAtom } from "@features/_global/hooks/useDarkMode";

const FilterSearch: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  return (
    <section className={`${isDarkMode ? "bg-gray-900 shadow-white" : "bg-gray-100"} p-4 shadow-md text-white`}>
      <Search />
      <Filter />
    </section>
  );
};

export default FilterSearch;
