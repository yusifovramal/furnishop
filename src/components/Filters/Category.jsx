import { useFilterItems } from "../../hooks/useFilterItems";
import Loading from "../Loading/Loading";

function Category({ name, products, updateFilters, category }) {
    const { filterItems: categories } = useFilterItems(products, "category");
    return (
        <div className="form-control category">
            <h5>Category</h5>
            {categories.length < 2 ? <Loading small /> : <div>
                {categories.map((c, index) => {
                    return (
                        <button
                            key={index}
                            onClick={updateFilters}
                            type="button"
                            name={name}
                            className={`${category === c.toLowerCase() ? "filter-button active" : "filter-button"}`}
                        >
                            {c}
                        </button>
                    );
                })}
            </div>}

        </div>
    );
}

export default Category;
