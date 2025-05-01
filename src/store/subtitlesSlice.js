import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const subtitlesSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    addSubtitle: (state, action) => {
      state.items.push(action.payload);
    },
    removeSubtitle: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addSubtitle, removeSubtitle } = subtitlesSlice.actions;
export default subtitlesSlice.reducer;