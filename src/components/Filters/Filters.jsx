import { useDispatch, useSelector } from "react-redux";
import {
  applyFilter,
  clearFilters,
  handleFilters,
} from "../../features/Products/productsSlice";
import { useGetProductsQuery } from "../../features/Products/productsApi";
import { useEffect } from "react";
import { Wrapper } from "./FiltersWrapper";
import Category from "./Category";
import Colors from "./Colors";

const Filters = () => {
  const dispatch = useDispatch();
  const { data: products } = useGetProductsQuery();
  const { text, category, color } = useSelector((store) => store.products);


  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    dispatch(handleFilters({ name, value }));
  };

  useEffect(() => {
    dispatch(applyFilter([products, category, text,color]));
  }, [products, category, text, color]);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          <Category
            name="category"
            category={category}
            products={products}
            updateFilters={updateFilters}
          />
          <Colors
            name="color"
            color={color}
            products={products}
            updateFilters={updateFilters}
          />

        </form>
        <button onClick={()=>dispatch(clearFilters())} type="button" className="btn clear-btn">
          Clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
