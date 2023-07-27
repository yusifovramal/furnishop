import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../features/Products/productsApi";
import { handleFilters } from "../../../features/Products/productsSlice";
import { Wrapper } from "./Wrapper";
import Category from "../Category";
import Colors from "../Colors";
import { closeMobileFilter } from "../../../features/Utils/utilsSlice";
import { AiFillCloseCircle } from "react-icons/ai";
const MobileFilter = () => {
  const dispatch = useDispatch();
  const { data: products } = useGetProductsQuery();
  const { text, category, color } = useSelector((store) => store.products);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    dispatch(handleFilters({ name, value }));
  };

  return (
    <Wrapper onClick={() => dispatch(closeMobileFilter())}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => e.preventDefault()}>
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
      </div>
      <button className="close-modal">
        <AiFillCloseCircle />
      </button>
    </Wrapper>
  );
};

export default MobileFilter;
