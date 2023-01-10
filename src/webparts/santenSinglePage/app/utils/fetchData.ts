import { IPostState } from '../store/slices/post';
import { ICommentState } from '../store/slices/comment';
import { IToolState } from '../store/slices/tool';
import { IInfoGlanceState } from '../store/slices/info';

const URL =
  'https://santen-spfx-default-rtdb.asia-southeast1.firebasedatabase.app';

type ReturnType = IPostState | ICommentState | IToolState | IInfoGlanceState;

interface FuncType {
  (): Promise<ReturnType>;
}

const fetchData = (route: string): FuncType => {
  return async (): Promise<ReturnType> => {
    const response = await fetch(`${URL}/${route}`, {
      method: 'GET',
    });
    const data = response.json();
    return data;
  };
};

export default fetchData;
