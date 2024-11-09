import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mengambil query parameter dari URL (default value jika tidak ada parameter)
  const searchQueary = searchParams.get("search") || ""; // Misalnya, pencarian
  const directionQuery = searchParams.get("direction") || ""; // Misalnya, urutan asc/desc
  const orderByQuery = searchParams.get("orderBy") || "";
  const filterByQuery = searchParams.get("filterBy") || "";

  interface SearchParams {
    search?: string;
    direction?: string;
    orderBy?: string;
    filterBy?: string;
  }

  const handleSearchChange = ({ search, direction, orderBy, filterBy }: SearchParams) => {
    setSearchParams({
      search: search ?? searchQueary,
      direction: direction ?? directionQuery,
      orderBy: orderBy ?? orderByQuery,
      filterBy: filterBy ?? filterByQuery,
    });
  };

  return { searchQueary, directionQuery, orderByQuery, filterByQuery, handleSearchChange };
};
