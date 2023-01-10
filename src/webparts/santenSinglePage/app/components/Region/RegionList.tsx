import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as moment from 'moment';

import { useAppSelector, RootState } from '../../store';
import Grid from '../UI/Grid/Grid';
import classes from './RegionList.module.scss';

interface IRegionListProps {}

const RegionList: React.FC<IRegionListProps> = () => {
  const navigate = useNavigate();
  const regionalPosts = useAppSelector(
    (state: RootState) => state.posts.regional
  );

  return (
    <Grid
      title='FROM REGION NEWS'
      showMore='Show More Regional News'
      templateColumns={5}
      id='regionalPosts'
      onShowMore={async () => navigate('/corporate-news')}
    >
      {regionalPosts.map((item) => (
        <div key={item.id} className={classes.item}>
          <div className={classes.info}>
            <div className={classes.createdDate}>
              {moment(item.createdDate).format('MMM Do YYYY')}
            </div>
            <div className={classes.headline}>{item.headline}</div>
            <div className={classes.content}>
              <p>{item.content}</p>
            </div>
            <hr />
            <div className={classes.category}>
              <span>Report</span>
            </div>
          </div>
        </div>
      ))}
    </Grid>
  );
};

export default RegionList;
