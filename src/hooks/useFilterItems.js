export const useFilterItems = (data) => {
  const filterItems = [
    "all",
    ...new Set(
      data?.map((product) => {
        const { category } = product;
        return category;
      })
    ),
  ];
  return { filterItems };
};
