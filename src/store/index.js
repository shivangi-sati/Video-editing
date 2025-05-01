import { configureStore } from '@reduxjs/toolkit';
import timelineReducer from './timelineSlice';
import audioReducer from './audioSlice';
import subtitlesReducer from './subtitlesSlice';
import overlayReducer from './overlaySlice';
import videoReducer from '../slices/videoSlice';

export const store = configureStore({
  reducer: {
    timeline: timelineReducer,
    audio: audioReducer,
    subtitles: subtitlesReducer,
    overlay: overlayReducer,
    video: videoReducer,
  },
});
