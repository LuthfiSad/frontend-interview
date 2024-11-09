import { useSearch } from "@features/_global/hooks/useSearch";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Search: React.FC = () => {
  const {directionQuery,handleSearchChange, searchQueary} = useSearch();
  const [isOrderByOpen, setIsOrderByOpen] = useState(false);
  const [isDirectionOpen, setIsDirectionOpen] = useState(false);
  return (
    <div className="flex items-center justify-center space-x-2">
      <input
        type="text"
        value={searchQueary}
        onChange={(e) => handleSearchChange({search: e.target.value})}
        placeholder="Telusuri"
        className="bg-gray-800 max-w-xl text-white rounded-full px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="relative">
        <button
          onClick={() => setIsOrderByOpen(!isOrderByOpen)}
          className="p-2 bg-blue-500 rounded-full flex items-center space-x-2"
        >
          <span>Urutkan</span>
          <MdArrowDropDown />
        </button>
        {isOrderByOpen && (
          <div className="absolute bg-white text-black rounded-md mt-2 w-32 shadow-lg">
            <button
              onClick={() => handleSearchChange({orderBy: 'name'})}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Nama
            </button>
            <button
              onClick={() => handleSearchChange({orderBy: 'createdAt'})}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Tanggal
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          onClick={() => setIsDirectionOpen(!isDirectionOpen)}
          className="p-2 bg-blue-500 rounded-full flex items-center space-x-2"
        >
          {directionQuery === "asc" ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </button>
        {isDirectionOpen && (
          <div className="absolute bg-white text-black rounded-md mt-2 w-24 shadow-lg">
            <button
              onClick={() => handleSearchChange({ direction: "asc" })}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Ascending
            </button>
            <button
              onClick={() => handleSearchChange({ direction: "desc" })}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Descending
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
