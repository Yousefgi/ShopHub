export function getSortConfig(sortBy: string) {
  switch (sortBy) {
    case "name-asc":
      return { sortBy: "name", desc: false };

    case "name-desc":
      return { sortBy: "name", desc: true };

    case "price-asc":
      return { sortBy: "price", desc: false };

    case "price-desc":
      return { sortBy: "price", desc: true };

    default:
      return {
        sortBy: "",
        desc: false,
      };
  }
}