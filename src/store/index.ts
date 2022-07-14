import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './reducer/feedbackSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface Payload<T> {
  payload: T;
}
