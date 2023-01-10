import * as React from 'react';

import { useAppSelector, RootState } from '../../store';
import IPost from '../../store/interfaces/IPost';
import Carousel from '../UI/Carousel/Carousel';
import classes from './CorporateCarousel.module.scss';

interface ICorporateCarouselProps {}

const renderMessageHandler = (post: IPost): JSX.Element => {
  return (
    <div className={classes.postMessageContainer}>
      <div className={classes.postMessage}>
        <div>HERO MESSAGE</div>
        <div>{post.headline}</div>
        <div>{post.content.split('.').slice(0, 1).join('.')}</div>
      </div>
    </div>
  );
};

const CorporateCarousel: React.FC<ICorporateCarouselProps> = () => {
  const corporatePosts = useAppSelector(
    (state: RootState) => state.posts.corporate
  ).slice(0, 5);
  return (
    <Carousel items={corporatePosts} renderMessage={renderMessageHandler} />
  );
};

export default CorporateCarousel;
