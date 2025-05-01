
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageData: null,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setImageOverlay: (state, action) => {
      state.imageData = action.payload;
    },
    clearImageOverlay: (state) => {
      state.imageData = null;
    },
  },
});

export const { setImageOverlay, clearImageOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
