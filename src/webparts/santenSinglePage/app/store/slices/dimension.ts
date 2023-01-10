import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISize } from 'office-ui-fabric-react';

export interface IDimensionState {
  webpart: ISize;
}

const initialState: IDimensionState = {
  webpart: {
    width: 0,
    height: 0,
  },
};

const dimensionSlice = createSlice({
  name: 'dimension',
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.webpart.width = action.payload;
    },
  },
});

export const { setWidth } = dimensionSlice.actions;
export default dimensionSlice;
