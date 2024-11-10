import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { useAtom } from "jotai";
import { darkModeAtom } from "@features/_global/store/darkMode";

const FilterSearch: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  return (
    <section
      className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} p-4 text-white`}
      style={{
        boxShadow: isDarkMode
          ? "0 4px 6px rgba(255, 255, 255, 0.2)"
          : "0 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Search />
      <Filter />
    </section>
  );
};

export default FilterSearch;
