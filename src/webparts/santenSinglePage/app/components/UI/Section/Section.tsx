import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';

import classes from './Section.module.scss';

interface ISectionProps {
  id?: string;
  title: string;
  showMore?: string;
  edit?: string;
  onShowMore?: () => void;
  onEdit?: () => void;
}

const Section: React.FC<ISectionProps> = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.head}>
        <div className={classes.title}>{props.title}</div>
        {!!props.showMore && (
          <div className={classes.showMore} onClick={props.onShowMore}>
            <Icon iconName='CirclePlus' className={classes.icon} />
            {props.showMore}
          </div>
        )}
        {!!props.edit && (
          <div className={classes.showMore} onClick={props.onEdit}>
            <Icon iconName='Switch' className={classes.icon} />
            {props.edit}
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default Section;
