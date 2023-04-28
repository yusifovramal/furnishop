import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filteredProducts: [],
  text: "",
  company: "all",
  category: "all",
  color: "all",
  min_price: 0,
  max_price: 0,
  price: 0,
  shipping: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.filteredProducts = payload;
    },
    hanleFilters: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    sortPriceLowest: (state) => {
      state.filteredProducts.sort((a, b) => {
        return a.price - b.price;
      });
    },
    sortPriceHighest: (state) => {
      state.filteredProducts.sort((a, b) => {
        return b.price - a.price;
      });
    },
    sortAll: (state) => {
      state.filteredProducts.sort((a, b) => {
        return a.id.localeCompare(b.id);
      });
    },
    applyFilter: (state, { payload }) => {
      const [products, category, text] = payload;
      let tempProducts = [];
      if (products) {
        tempProducts = [...products];
      }
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  setProducts,
  hanleFilters,
  sortPriceLowest,
  sortPriceHighest,
  sortAll,
  applyFilter,
} = productsSlice.actions;
export default productsSlice.reducer;
