import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import ITool from '../interfaces/ITool';

const URL =
  'https://santen-spfx-default-rtdb.asia-southeast1.firebasedatabase.app';

export interface IToolState {
  items: ITool[];
}

const initialState: IToolState = {
  items: [],
};

export const fetchTools = createAsyncThunk(
  'tool/fetch',
  async (): Promise<IToolState> => {
    const response = await fetch(`${URL}/tools.json`, {
      method: 'GET',
    });
    const data = await response.json();
    return {
      items: data,
    };
  }
);

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTools.fulfilled,
      (state, action: PayloadAction<IToolState>) => {
        state.items = action.payload.items;
      }
    );
  },
});

export default toolSlice;
