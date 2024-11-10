import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useAtom } from "jotai";
import { MdArrowDropDown } from "react-icons/md";
import { DropdownProps } from "../types/dropdown";

const Dropdown: React.FC<DropdownProps> = ({ title, option, className }) => {
  const [isDarkMode] = useAtom(darkModeAtom);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={`px-4 min-w-max py-[10px] ${className} ${
            isDarkMode ? "bg-gray-300 text-gray-800" : "bg-gray-600"
          } rounded-full flex items-center space-x-2`}
        >
          <span>{title}</span>
          <MdArrowDropDown />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {option.length > 0 &&
            option.map((item, index) => (
              <MenuItem key={index}>
                <button
                  onClick={item.onClick}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {item.label}
                </button>
              </MenuItem>
            ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
