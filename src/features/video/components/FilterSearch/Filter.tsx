import { categories } from "@core/services/category";
import { uploaders } from "@core/services/uploader";
import { darkModeAtom } from "@features/_global/store/darkMode";
import { useSearch } from "@features/_global/hooks/useSearch";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Filter = () => {
  const [isAtStartCategory, setIsAtStartCategory] = useState(true); // Menyimpan apakah sudah di ujung kiri
  const [isAtEndCategory, setIsAtEndCategory] = useState(false);
  const [isAtStartUploader, setIsAtStartUploader] = useState(true); // Menyimpan apakah sudah di ujung kiri
  const [isAtEndUploader, setIsAtEndUploader] = useState(false);
  const [isDarkMode] = useAtom(darkModeAtom);
  const { filterByQuery, handleSearchChange } = useSearch();

  const scrollCategoryRef = useRef<HTMLDivElement | null>(null);
  const scrollUploaderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    // category
    if (scrollCategoryRef.current) {
      const containerCategory = scrollCategoryRef.current;
      const isStartCategory = containerCategory.scrollLeft === 0; // Jika di ujung kiri
      const isEndCategory =
        containerCategory.scrollWidth - containerCategory.scrollLeft <=
        containerCategory.clientWidth; // Jika di ujung kanan

      setIsAtStartCategory(isStartCategory);
      setIsAtEndCategory(isEndCategory);
    }

    // uploader
    if (scrollUploaderRef.current) {
      const containerUploader = scrollUploaderRef.current;
      const isStartUploader = containerUploader.scrollLeft === 0; // Jika di ujung kiri
      const isEndUploader =
        containerUploader.scrollWidth - containerUploader.scrollLeft <=
        containerUploader.clientWidth; // Jika di ujung kanan

      setIsAtStartUploader(isStartUploader);
      setIsAtEndUploader(isEndUploader);
    }
  };

  // Menambahkan event listener saat komponen dimount
  useEffect(() => {
    if (!scrollCategoryRef.current) return;
    if (!scrollUploaderRef.current) return;
    const containerCategory = scrollCategoryRef.current;
    setIsAtEndCategory(
      containerCategory.scrollWidth - containerCategory.scrollLeft <=
        containerCategory.clientWidth
    );
    setIsAtStartCategory(containerCategory.scrollLeft === 0);
    containerCategory.addEventListener("scroll", handleScroll);

    const containerUploader = scrollUploaderRef.current;
    setIsAtEndUploader(
      containerUploader.scrollWidth - containerUploader.scrollLeft <=
        containerUploader.clientWidth
    );
    setIsAtStartUploader(containerUploader.scrollLeft === 0);
    containerUploader.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll);
    return () => {
      containerCategory.removeEventListener("scroll", handleScroll);
      containerUploader.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleChangeFilter = (filter: string) => {
    if (filterByQuery === filter) {
      handleSearchChange({ filterBy: "" });
    } else {
      handleSearchChange({ filterBy: filter });
    }
  };
  return (
    <>
      {/* Category */}
      <h3
        className={`mt-3 text-sm px-1 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        By Category :
      </h3>
      <div className="relative">
        {!isAtStartCategory && (
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
          className="scroll-hide flex overflow-x-auto mt-1 space-x-3"
          ref={scrollCategoryRef}
        >
          <button
            onClick={() => handleChangeFilter("")}
            className={`flex-shrink-0 ${
              filterByQuery === ""
                ? isDarkMode
                  ? "bg-gray-300 text-gray-800"
                  : "bg-gray-600"
                : isDarkMode
                ? "bg-gray-600"
                : "bg-gray-300 text-gray-800"
            } rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition`}
          >
            Semua
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleChangeFilter(category)}
              className={`flex-shrink-0 ${
                filterByQuery === category
                  ? isDarkMode
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-600"
                  : isDarkMode
                  ? "bg-gray-600"
                  : "bg-gray-300 text-gray-800"
              } rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition`}
            >
              {category}
            </button>
          ))}
        </div>
        {!isAtEndCategory && (
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
      {/* Uploader */}
      <h3
        className={`mt-1 text-sm px-1 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        By Uploader :
      </h3>
      <div className="relative">
        {!isAtStartUploader && (
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
          className="scroll-hide flex overflow-x-auto mt-1 space-x-3"
          ref={scrollUploaderRef}
        >
          <button
            onClick={() => handleChangeFilter("")}
            className={`flex-shrink-0 ${
              filterByQuery === ""
                ? isDarkMode
                  ? "bg-gray-300 text-gray-800"
                  : "bg-gray-600"
                : isDarkMode
                ? "bg-gray-600"
                : "bg-gray-300 text-gray-800"
            } rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition`}
          >
            Semua
          </button>
          {uploaders.map((uploader, index) => (
            <button
              key={index}
              onClick={() => handleChangeFilter(uploader)}
              className={`flex-shrink-0 ${
                filterByQuery === uploader
                  ? isDarkMode
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-600"
                  : isDarkMode
                  ? "bg-gray-600"
                  : "bg-gray-300 text-gray-800"
              } rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition`}
            >
              {uploader}
            </button>
          ))}
        </div>
        {!isAtEndUploader && (
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
    </>
  );
};

export default Filter;
