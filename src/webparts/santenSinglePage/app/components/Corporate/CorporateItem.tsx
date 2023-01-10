import * as React from 'react';
import * as moment from 'moment';
import classes from './CorporateItem.module.scss';

interface ICorporateItemProps {
  annotation: string;
  createdDate: string;
  headline: string;
  thumbnail: string;
}

const CorporateItem: React.FC<ICorporateItemProps> = (props) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${props.thumbnail})`,
      }}
    >
      {props.annotation && (
        <div className={classes.annotation}>
          {props.annotation.toUpperCase()}
        </div>
      )}
      <div className={classes.info}>
        <div className={classes.createdDate}>
          {moment(props.createdDate).format('MMM Do YYYY')}
        </div>
        <div className={classes.title}>{props.headline}</div>
      </div>
    </div>
  );
};

export default CorporateItem;
