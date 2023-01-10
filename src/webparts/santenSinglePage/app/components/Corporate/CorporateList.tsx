import * as React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import Grid from '../UI/Grid/Grid';
import CorporateItem from './CorporateItem';
import { useAppSelector, RootState } from '../../store/index';

interface ICorporateListProps {}

const CorporateList: React.FC<ICorporateListProps> = () => {
  const corporatePosts = useAppSelector(
    (state: RootState) => state.posts.corporate
  );

  const navigate: NavigateFunction = useNavigate();
  return (
    <Grid
      title='FROM CORPORATE'
      showMore='Show More Corporate Information'
      templateColumns={4}
      id='corporatePosts'
      onShowMore={async () => navigate('/corporate-news')}
    >
      {!!corporatePosts &&
        !!corporatePosts.length &&
        corporatePosts.map((item) => (
          <React.Fragment key={item.id}>
            <CorporateItem {...item} />
          </React.Fragment>
        ))}
    </Grid>
  );
};

export default CorporateList;
