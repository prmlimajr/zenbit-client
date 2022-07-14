/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export interface FeedbackState {
  name: string;
  email: string;
  message: string;
  isLoading?: boolean;
  errorMessage?: string;
}

const initialState: FeedbackState = {
  name: '',
  email: '',
  message: '',
  isLoading: false,
  errorMessage: '',
};

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const sendFeedback = createAsyncThunk(
  'sendFeedback',
  async ({
    name,
    email,
    message
  }: {
    name: string;
    email: string;
    message: string;
  }, { rejectWithValue}) => {
    try {
      await api.post('/api/v1/feedback', {
        name,
        email,
        message
      });
      toast.success('Feedback sent successfully');
    } catch (err: any) {
      toast.error(err.response.data.message);

      let error: AxiosError<ValidationErrors> = err;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFeedback.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(sendFeedback.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(sendFeedback.rejected, (state, action: any) => {
        state.isLoading = false;
      });
  }
});

export default feedbackSlice.reducer;
