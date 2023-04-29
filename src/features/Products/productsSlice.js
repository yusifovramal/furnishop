import { createSlice } from "@reduxjs/toolkit";

const filters = {
  text: "",
  company: "all",
  category: "all",
  color: "all",
  min_price: 0,
  max_price: 0,
  price: 0,
  shipping: false,
};
const initialState = {
  filteredProducts: [],
  ...filters,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.filteredProducts = payload;
    },
    handleFilters: (state, { payload }) => {
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
      const [products, category, text, color] = payload;
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
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      state.filteredProducts = tempProducts;
    },
    clearFilters: (state) => {
      return {
        ...state,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
      }
    },
  },
});

export const {
  setProducts,
  handleFilters,
  sortPriceLowest,
  sortPriceHighest,
  sortAll,
  applyFilter,
  clearFilters,
} = productsSlice.actions;
export default productsSlice.reducer;
