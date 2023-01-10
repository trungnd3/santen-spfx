import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as moment from 'moment';

import { useAppSelector, RootState } from '../../store';
import List from '../UI/List/List';
import classes from './FunctionList.module.scss';

interface IFunctionListProps {}

const FunctionList: React.FC<IFunctionListProps> = () => {
  const navigate = useNavigate();
  const functionList = useAppSelector(
    (state: RootState) => state.posts.function
  );
  return (
    <List
      title='FROM FUNCTION NEWS'
      showMore='Show More Function News'
      id='functionPosts'
      bodyStyle={{ padding: '10px 0' }}
      onShowMore={async () => navigate('/corporate-news')}
    >
      {functionList.map((item) => (
        <div key={item.id} className={classes.item}>
          <div className={classes.info}>
            <div className={classes.headline}>
              {item.headline}
              <div className={classes.content}>{item.content}</div>
            </div>
            <div className={classes.category}>
              <span>Report</span>
            </div>
          </div>
          <div className={classes.metadata}>
            <div>{moment(item.createdDate).format('MMM Do YYYY')}</div>
            <span className={classes.separate}>|</span>
            <div>{item.author}</div>
          </div>
        </div>
      ))}
    </List>
  );
};

export default FunctionList;
