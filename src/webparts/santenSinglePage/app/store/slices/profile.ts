import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { IUserProfile } from '@pnp/sp/profiles';

import { getSP } from '../../../../../pnpjsConfig';

interface IProfile {
  PictureUrl: string;
}

export interface IProfilesState {
  data: IProfile;
}

const initialState: IProfilesState = {
  data: null,
};

export const fetchProfile = createAsyncThunk(
  'fetch/profile',
  async (): Promise<IProfilesState> => {
    const data = await getSP().profiles.userProfile;
    return {
      data,
    };
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfile.fulfilled,
      (state, action: PayloadAction<IProfilesState>) => {
        state.data = action.payload.data;
      }
    );
  },
});

export default profileSlice;
