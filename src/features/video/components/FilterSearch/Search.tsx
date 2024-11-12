import { darkModeAtom } from "@features/_global/store/darkMode";
import { useSearch } from "@features/_global/hooks/useSearch";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Dropdown from "../Dropdown";
import { DropdownProps } from "@features/video/types/dropdown";
import useDebounce from "@features/_global/hooks/useDebounce";

const Search: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  const { directionQuery, handleSearchChange, searchQuery, orderByQuery } =
    useSearch();

  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(inputValue, 500);

  // Update handleSearchChange only when debounced value changes
  useEffect(() => {
    handleSearchChange({ search: debouncedSearchQuery });
  }, [debouncedSearchQuery, handleSearchChange]);

  const dropdownOrderBy: DropdownProps = {
    title: orderByQuery || "Order By",
    option: [
      ...(orderByQuery
        ? [
            {
              label: "Reset",
              onClick: () => handleSearchChange({ orderBy: "", direction: "" }),
            },
          ]
        : []),
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
    title:
      directionQuery !== "desc" ? (
        <AiOutlineSortAscending />
      ) : (
        <AiOutlineSortDescending />
      ),
    option: [
      {
        label: "Ascending",
        onClick: () => handleSearchChange({ direction: "" }),
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Telusuri"
        className={`${
          isDarkMode
            ? "bg-gray-600 text-white border-gray-300"
            : "bg-gray-300 text-black border-gray-600"
        } border-2 box-border max-w-xl rounded-full px-4 py-2 flex-1 ring-0 outline-none min-w-[150px]`}
      />
      <Dropdown {...dropdownOrderBy} />
      {orderByQuery && <Dropdown {...dropdownDirection} />}
    </div>
  );
};

export default Search;
