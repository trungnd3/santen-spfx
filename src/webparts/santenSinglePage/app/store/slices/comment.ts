import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponseComment, IParsedComment } from '../interfaces/IComment';
import IUser from '../interfaces/IUser';

const URL =
  'https://santen-spfx-default-rtdb.asia-southeast1.firebasedatabase.app';

export interface ICommentState {
  items: IParsedComment[];
}

const initialState: ICommentState = {
  items: [],
};

export const fetchComments = createAsyncThunk(
  'comment/fetch',
  async (): Promise<ICommentState> => {
    const response = await fetch(`${URL}/comments.json`, {
      method: 'GET',
    });
    const data = await response.json();
    const userRes = await fetch(`${URL}/users.json`, { method: 'GET' });
    const userData = await userRes.json();
    const returnData = data.map((item: IResponseComment) => {
      const user = userData.find((uItem: IUser) => uItem.id === item.userId);
      return {
        id: item.id,
        likes: item.likes,
        content: item.content,
        createdDate: item.createdDate,
        author: user.name,
        role: user.role,
        avatar: user.avatar,
      };
    });

    return {
      items: returnData,
    };
  }
);

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<ICommentState>) => {
        state.items = action.payload.items;
      }
    );
  },
});

export default commentSlice;
