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

  const handleSearchChange = ({
    search,
    direction,
    orderBy,
    filterBy,
  }: SearchParams) => {
    setSearchParams({
      ...(search || searchQuery ? { search: search ?? searchQuery } : null),
      ...(direction || directionQuery ? { direction: direction ?? directionQuery } : null),
      ...(orderBy || orderByQuery ? { orderBy: orderBy ?? orderByQuery } : null),
      ...(filterBy || filterByQuery ? { filterBy: filterBy ?? filterByQuery } : null),
    });
  };

  return {
    searchQuery,
    directionQuery,
    orderByQuery,
    filterByQuery,
    handleSearchChange,
  };
};
