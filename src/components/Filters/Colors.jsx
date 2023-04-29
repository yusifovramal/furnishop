import { FaCheck } from "react-icons/fa";
import { useFilterItems } from "../../hooks/useFilterItems";

function Colors({ name, products, updateFilters, color }) {
  const { filterItems: colors } = useFilterItems(products, "colors");
  return (
    <div className="form-control">
      <h5>Colors</h5>
      <div className="colors">
        {colors.map((c, index) => {
          if (c === "all") {
            return (
              <button
                key={index}
                name={name}
                onClick={updateFilters}
                data-color="all"
                className={`${color === "all" ? "filter-button all-btn active" : "filter-button all-btn"}`}
              >
                all
              </button>
            );
          }
          return (
            <button
              key={index}
              name={name}
              style={{ background: c }}
              className={`${color === c ? "filter-button color-btn active" : "filter-button color-btn"}`}
              data-color={c}
              onClick={updateFilters}
            >
              {color === c ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Colors;
