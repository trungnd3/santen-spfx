import * as React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { useAppSelector, RootState } from '../../../store';
import classes from './Carousel.module.scss';

interface ICarouselProps<T> {
  items: T[];
  renderMessage?: (item: T) => JSX.Element;
}

const ratio = 375 / 1620;

const Carousel = <T extends { id: number; thumbnail: string }>(
  props: ICarouselProps<T> & { children?: React.ReactChildren }
): JSX.Element => {
  const { width } = useAppSelector(
    (state: RootState) => state.dimension.webpart
  );
  return (
    <CarouselProvider
      className={classes.carousel}
      naturalSlideWidth={width}
      naturalSlideHeight={width * ratio}
      totalSlides={props.items.length}
      infinite={true}
    >
      <Slider className={classes.slider}>
        {props.items.map((item: T, index: number) => (
          <React.Fragment key={item.id}>
            <Slide className={classes.slide} index={index} key={index}>
              <Image src={item.thumbnail} />
              {!!props.renderMessage && (
                <React.Fragment>{props.renderMessage(item)}</React.Fragment>
              )}
            </Slide>
          </React.Fragment>
        ))}
      </Slider>
      <div className={classes.dotGroupContainer}>
        <div className={classes.dotGroup}>
          {props.items.map((_: T, index: number) => (
            <div className={classes.dotContainer} key={index}>
              <Dot className={classes.dot} slide={index} />
            </div>
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
