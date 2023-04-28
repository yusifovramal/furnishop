import React from "react";

function Shiping() {
  return (
    <div className="form-control shipping">
      <label htmlFor="shipping">free shipping</label>
      <input
        type="checkbox"
        name="shipping"
        id="shipping"
        checked={shipping}
        onChange={updateFilters}
      />
    </div>
  );
}

export default Shiping;
