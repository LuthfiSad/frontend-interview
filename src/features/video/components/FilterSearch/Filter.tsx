import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import { useSearch } from "@features/_global/hooks/useSearch";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Filter = () => {
  const [isAtStart, setIsAtStart] = useState(true); // Menyimpan apakah sudah di ujung kiri
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isDarkMode] = useAtom(darkModeAtom);
  const { filterByQuery, handleSearchChange } = useSearch();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const isStart = container.scrollLeft === 0; // Jika di ujung kiri
    const isEnd =
      container.scrollWidth - container.scrollLeft <= container.clientWidth; // Jika di ujung kanan

    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  // Menambahkan event listener saat komponen dimount
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    setIsAtEnd(
      container.scrollWidth - container.scrollLeft <= container.clientWidth
    );
    setIsAtStart(container.scrollLeft === 0);
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      {!isAtStart && (
        <div
          className="absolute flex justify-center px-4 rounded-r-sm items-center top-0 left-0 bottom-0 bg-gray-900"
          style={{
            boxShadow: "rgba(17, 24, 39, .5) 4px 0px 2px",
          }}
        >
          <FaArrowLeftLong />
        </div>
      )}
      <div
        className="scroll-hide flex overflow-x-auto mt-4 space-x-3"
        ref={scrollRef}
      >
        <button
          onClick={() => handleSearchChange({ filterBy: "Semua" })}
          className={`flex-shrink-0 ${
            filterByQuery === "Semua"
              ? isDarkMode
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-900"
              : ""
          } rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition`}
        >
          Semua
        </button>
      </div>
      {!isAtEnd && (
        <div
          className="absolute flex justify-center px-4 rounded-l-sm items-center top-0 right-0 bottom-0 bg-gray-900"
          style={{
            boxShadow: "rgba(17, 24, 39, .5) -4px 0px 2px",
          }}
        >
          <FaArrowRightLong />
        </div>
      )}
    </div>
  );
};

export default Filter;
