import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mengambil query parameter dari URL (default value jika tidak ada parameter)
  const searchQuery = searchParams.get("search") || ""; // Misalnya, pencarian
  const directionQuery = searchParams.get("direction") || ""; // Misalnya, urutan asc/desc
  const orderByQuery = searchParams.get("orderBy") || "";
  const filterByQuery = searchParams.get("filterBy") || "";

  interface SearchParams {
    search?: string;
    direction?: string;
    orderBy?: string;
    filterBy?: string;
  }

  const handleSearchChange = useCallback(({
    search,
    direction,
    orderBy,
    filterBy,
  }: SearchParams) => {
    setSearchParams({
      ...(search !== "" && (search || searchQuery) ? { search: search ?? searchQuery } : null),
      ...(direction !== "" && (direction || directionQuery) ? { direction: direction ?? directionQuery } : null),
      ...(orderBy !== "" &&(orderBy || orderByQuery) ? { orderBy: orderBy ?? orderByQuery } : null),
      ...(filterBy !== "" && (filterBy || filterByQuery) ? { filterBy: filterBy ?? filterByQuery } : null),
    });
  }, [directionQuery, filterByQuery, orderByQuery, searchQuery, setSearchParams]);

  return {
    searchQuery,
    directionQuery,
    orderByQuery,
    filterByQuery,
    handleSearchChange,
  };
};
