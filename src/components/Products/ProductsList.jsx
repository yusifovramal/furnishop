import React from "react";

import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/Products/productsApi";
import { Loading, ListView, GridView } from "../index";

const ProductList = () => {
  const { grid_view } = useSelector((store) => store.utils);
  const { filteredProducts: products } = useSelector((store) => store.products);
  const { isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
