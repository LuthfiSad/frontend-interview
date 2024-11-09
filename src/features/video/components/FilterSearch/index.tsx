import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const FilterSearch: React.FC = () => {
  return (
    <section className="bg-gray-900 p-4 text-white">
      <Search />
      <Filter />
    </section>
  );
};

export default FilterSearch;
