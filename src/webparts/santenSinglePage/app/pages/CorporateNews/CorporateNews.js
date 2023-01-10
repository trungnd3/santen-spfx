import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CoverImg from '../../components/UI/CoverImg/CoverImg';
import Grid from '../../components/UI/Grid/Grid';
import CorporateItem from '../../components/Corporate/CorporateItem';

const CorporateNews = () => {
  const corporatePosts = useSelector((state) => state.posts.corporate);
  return (
    <Fragment>
      <CoverImg src='https://www.santen.com/en/assets/img/top/img_mv_ir.jpg' />
      <Grid
        title='FROM CORPORATE'
        showMore='Show More Corporate Information'
        templateColumns={4}
        id='corporatePosts'
      >
        {corporatePosts.map((item) => (
          <CorporateItem key={item.id} {...item} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default CorporateNews;
