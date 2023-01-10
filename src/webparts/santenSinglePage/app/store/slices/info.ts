import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import IInfo from '../interfaces/IInfo';
import IGlance from '../interfaces/IGlance';

const URL =
  'https://santen-spfx-default-rtdb.asia-southeast1.firebasedatabase.app';

export interface IInfoGlanceState {
  info: IInfo[];
  glance: IGlance[];
}

const initialState: IInfoGlanceState = {
  info: [],
  glance: [],
};

export const fetchInfo = createAsyncThunk(
  'info/fetch',
  async (): Promise<IInfoGlanceState> => {
    const response = await fetch(`${URL}/info.json`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  }
);

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchInfo.fulfilled,
      (state, action: PayloadAction<IInfoGlanceState>) => {
        state.info = action.payload.info;
        state.glance = action.payload.glance;
      }
    );
  },
});

export default infoSlice;
