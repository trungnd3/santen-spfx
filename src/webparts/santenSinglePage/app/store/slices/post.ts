import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import IPost from '../interfaces/IPost';

const URL =
  'https://santen-spfx-default-rtdb.asia-southeast1.firebasedatabase.app';

export interface IPostState {
  corporate: IPost[];
  regional: IPost[];
  function: IPost[];
}

const initialState: IPostState = {
  corporate: [],
  regional: [],
  function: [],
};

export const fetchPosts = createAsyncThunk(
  'post/fetch',
  async (): Promise<IPostState> => {
    const response = await fetch(`${URL}/posts.json`, {
      method: 'GET',
    });
    const data = await response.json();
    const resData = {
      corporate: data.filter((item: IPost) => !item.region && !item.isFunction),
      regional: data.filter((item: IPost) => !!item.region && !item.isFunction),
      function: data.filter((item: IPost) => !!item.isFunction),
    };
    return resData;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<IPostState>) => {
        state.corporate = action.payload.corporate;
        state.regional = action.payload.regional;
        state.function = action.payload.function;
      }
    );
  },
});

export default postSlice;
