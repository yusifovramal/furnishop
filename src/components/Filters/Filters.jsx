import { useDispatch, useSelector } from "react-redux";
import {
  applyFilter,
  hanleFilters,
} from "../../features/Products/productsSlice";
import { useGetProductsQuery } from "../../features/Products/productsApi";
import { useEffect } from "react";
import { useFilterItems } from "../../hooks/useFilterItems";
import { Wrapper } from "./FiltersWrapper";

const Filters = () => {
  const dispatch = useDispatch();
  const { data: products } = useGetProductsQuery();
  const { filterItems: categories } = useFilterItems(products);
  const { text, category } = useSelector((store) => store.products);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    dispatch(hanleFilters({ name, value }));
  };

  console.log(text);
  useEffect(() => {
    dispatch(applyFilter([products, category, text]));
  }, [products, category, text]);

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
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </form>
        <button type="button" className="clear-btn">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
