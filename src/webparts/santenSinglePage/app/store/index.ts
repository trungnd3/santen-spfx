import {
  Store,
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import postSlice from './slices/post';
import commentSlice from './slices/comment';
import toolSlice from './slices/tool';
import infoSlice from './slices/info';
import dimensionSlice from './slices/dimension';
import profileSlice from './slices/profile';

const rootReducer = combineReducers({
  posts: postSlice.reducer,
  comments: commentSlice.reducer,
  tools: toolSlice.reducer,
  info: infoSlice.reducer,
  dimension: dimensionSlice.reducer,
  profile: profileSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};

const store: AppStore = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = (): AppThunkDispatch =>
  useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { fetchPosts } from './slices/post';
export { fetchInfo } from './slices/info';
export { fetchComments } from './slices/comment';
export { fetchTools } from './slices/tool';
export { setWidth } from './slices/dimension';
export { fetchProfile } from './slices/profile';

export default store;
