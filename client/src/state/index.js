import { FlashOnRounded } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  intialState,
  reducers: {
    setItems: (stat, action) => {
      stat.items = action.payload;
    },
    addToCart: (stat, action) => {
      stat.cart = [...stat.cart, action.payload.items];
    },
    removeFromCart: (stat, action) => {
      stat.cart = stat.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 0) {
          item.count--;
        }
        return item;
      });
    },
    setIsOpenCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsOpenCart,
} = cartSlice.actions;

export default cartSlice.reducer;
