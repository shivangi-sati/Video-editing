import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mutedSegments: [],
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    muteSegment: (state, action) => {
      if (!state.mutedSegments.includes(action.payload)) {
        state.mutedSegments.push(action.payload);
      }
    },
    unmuteSegment: (state, action) => {
      state.mutedSegments = state.mutedSegments.filter((id) => id !== action.payload);
    },
  },
});

export const { muteSegment, unmuteSegment } = audioSlice.actions;
export default audioSlice.reducer;
