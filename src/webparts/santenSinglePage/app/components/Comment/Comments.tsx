import * as React from 'react';

import { useAppSelector, RootState } from '../../store';
import List from '../UI/List/List';
import Comment from './Comment';
import ToComment from './ToComment';

interface ICommentsProps {}

const Comments: React.FC<ICommentsProps> = () => {
  const comments = useAppSelector((state: RootState) => state.comments.items);

  return (
    <React.Fragment>
      <List title='VOICES' showMore='See More Voices' id='comments'>
        {comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <Comment {...comment} />
          </React.Fragment>
        ))}
      </List>
      <ToComment />
    </React.Fragment>
  );
};

export default Comments;
