import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import { useSearch } from "@features/_global/hooks/useSearch";
import { useAtom } from "jotai";
import React from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Dropdown from "../Dropdown";
import { DropdownProps } from "@features/video/types/dropdown";

const Search: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  const { directionQuery, handleSearchChange, searchQuery } = useSearch();

  const dropdownOrderBy: DropdownProps = {
    title: "Order By",
    option: [
      {
        label: "Views",
        onClick: () => handleSearchChange({ orderBy: "views" }),
      },
      {
        label: "Likes",
        onClick: () => handleSearchChange({ orderBy: "likes" }),
      },
      {
        label: "Upload Date",
        onClick: () => handleSearchChange({ orderBy: "uploadDate" }),
      },
    ],
  };

  const dropdownDirection: DropdownProps = {
    title: directionQuery === "asc" ? <AiOutlineSortAscending/> : <AiOutlineSortDescending />,
    option: [
      {
        label: "Ascending",
        onClick: () => handleSearchChange({ direction: "asc" }),
      },
      {
        label: "Descending",
        onClick: () => handleSearchChange({ direction: "desc" }),
      },
    ],
    className: "text-2xl",
  };

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearchChange({ search: e.target.value })}
        placeholder="Telusuri"
        className={`${
          isDarkMode
            ? "bg-gray-600 text-white border-gray-300"
            : "bg-gray-300 text-black border-gray-600"
        } border-2 box-border max-w-xl rounded-full px-4 py-2 flex-1 ring-0 outline-none min-w-[150px]`}
      />
      <Dropdown {...dropdownOrderBy} />
      <Dropdown {...dropdownDirection} />
    </div>
  );
};

export default Search;
