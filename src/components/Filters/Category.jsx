import { useFilterItems } from "../../hooks/useFilterItems";

function Category({ name, products, updateFilters, category }) {
    const { filterItems: categories } = useFilterItems(products, "category");
    return (
        <div className="form-control">
            <h5>Category</h5>
            <div>
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
            </div>
        </div>
    );
}

export default Category;
