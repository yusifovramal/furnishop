import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setGridView, setListView } from "../../features/Utils/utilsSlice";

import { useEffect, useState } from "react";
import {
  sortAll,
  sortPriceHighest,
  sortPriceLowest,
} from "../../features/Products/productsSlice";
import { Wrapper } from "./SortWrapper";

const Sort = () => {
  const dispatch = useDispatch();
  const { filteredProducts: products } = useSelector((store) => store.products);
  const { grid_view } = useSelector((store) => store.utils);
  const [sort, setSort] = useState("all");

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "all") {
      dispatch(sortAll());
    } else if (sort === "price-lowest") {
      dispatch(sortPriceLowest());
    } else {
      dispatch(sortPriceHighest());
    }
  }, [sort]);

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={() => dispatch(setGridView())}
          className={`${grid_view ? "active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => dispatch(setListView())}
          className={`${!grid_view ? "active" : null}`}
        >
          <BsList />
        </button>
      </div>
      <p className="p-found">{products.length} products found</p>
      <form>
        <div className="custom-select">
          <select name="sort" id="sort" value={sort} onChange={handleSort}>
            <option value="all">All</option>
            <option value="price-lowest">Low to High</option>
            <option value="price-highest">High to Low</option>
          </select>
        </div>
      </form>
    </Wrapper>
);
};

export default Sort;
