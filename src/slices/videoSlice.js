import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  scenes: [],
  subtitles: [],
}

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addScene(state, action) {
      state.scenes.push(action.payload)
    },
    removeScene(state, action) {
      state.scenes = state.scenes.filter(scene => scene.id !== action.payload)
    },
    reorderScenes(state, action) {
      state.scenes = action.payload 
    },
    addSubtitle(state, action) {
      state.subtitles.push(action.payload)
    },
    removeSubtitle(state, action) {
      state.subtitles = state.subtitles.filter(sub => sub.id !== action.payload)
    },
    updateSubtitle(state, action) {
      const { id, newContent } = action.payload
      const index = state.subtitles.findIndex(sub => sub.id === id)
      if (index !== -1) {
        state.subtitles[index] = { ...state.subtitles[index], ...newContent }
      }
    }
  }
})

export const {
  addScene,
  removeScene,
  reorderScenes,
  addSubtitle,
  removeSubtitle,
  updateSubtitle
} = videoSlice.actions;

export default videoSlice.reducer
