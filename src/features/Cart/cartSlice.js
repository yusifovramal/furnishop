import { createSlice } from "@reduxjs/toolkit";
import { getLocalCart } from "../../utils/localStorage";
import { formatPrice } from "../../utils/formatPrice";

const initialState = {
  cartItems: getLocalCart(),
  total_amount: 0,
  shipping_fee: 499,
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, mainColor, product, amount } = payload;

      const targetProduct = state.cartItems.find(
        (item) => item.id === id + mainColor
      );

      if (!targetProduct) {
        const cartProduct = {
          id: id + mainColor,
          color: mainColor,
          name: product.name,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          stock: product.stock,
        };
        state.cartItems = [...state.cartItems, cartProduct];
        return;
      } else {
        const newCartItem = state.cartItems.find((item) => {
          return item.id === id + mainColor;
        });
        const newAmount = amount;
        if (newAmount <= newCartItem.stock) {
          newCartItem.amount = newAmount;
        } else {
          newCartItem.amount = newCartItem.stock;
        }
      }
    },
    toggleAmount: (state, { payload }) => {
      const [id, func] = payload;
      const target = state.cartItems.find((item) => item.id === id);
      if (func === "inc") {
        target.amount < target.stock && target.amount++;
      }
      if (func === "dec") {
        target.amount > 1 && target.amount--;
      }
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total_amount = formatPrice(total);
    }
  },
});

export const {
  addToCart,
  toggleAmount,
  removeItem,
  clearCart,
  calculateTotal,
  calculateOrderTotal
} = cartSlice.actions;
export default cartSlice.reducer;
