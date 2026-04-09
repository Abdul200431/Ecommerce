import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    AddItem: (state, action) => {
      state.items.push(action.payload);
    },

    RemoveItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload   // ✅ FIXED
      );
    }
  }
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;