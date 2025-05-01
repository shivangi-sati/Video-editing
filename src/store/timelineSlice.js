import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  segments: ['Scene 1', 'Scene 2'],
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    addSegment: (state) => {
      state.segments.push(`Scene ${state.segments.length + 1}`);
    },
    removeSegment: (state, action) => {
      state.segments.splice(action.payload, 1);
    },
  },
});

export const { addSegment, removeSegment } = timelineSlice.actions;
export default timelineSlice.reducer;
