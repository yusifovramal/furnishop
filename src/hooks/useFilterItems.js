export const useFilterItems = (data, type) => {
  let filterItems = [
    "all",
    ...new Set(data?.map((product) => product[type])),
  ];

  if (type === "colors") {
    filterItems = [...new Set(filterItems.flat())];
  }

  return { filterItems };
};
