import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';

import ITool from '../../store/interfaces/ITool';
import Grid from '../UI/Grid/Grid';
import classes from './ToolLinkViewing.module.scss';

interface IToolLinkViewingProps {
  totalList: ITool[];
  editHandler: () => void;
}

const ToolLinkViewing: React.FC<IToolLinkViewingProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [displayedList, setDisplayedList] = React.useState([]);

  const toggleHandler = (): void => {
    setExpanded((prevState) => !prevState);
  };

  React.useEffect(() => {
    setDisplayedList(expanded ? props.totalList : props.totalList.slice(0, 24));
  }, [expanded, props.totalList]);

  return (
    <React.Fragment>
      <Grid
        title='TOOLS & LINKS'
        edit='Edit Panel'
        templateColumns={12}
        templateColumnsMobile={4}
        id='toolsLinksViewing'
        style={{ marginTop: '20px', gap: '20px' }}
        onEdit={props.editHandler}
      >
        {displayedList.map((item) => (
          <div key={item.id} className={classes.item}>
            <div className={classes.icon}>
              <Icon iconName='UserSync' />
            </div>
            <div className={classes.name}>{item.name}</div>
          </div>
        ))}
      </Grid>

      <div className={classes.toggle} onClick={toggleHandler}>
        {!expanded ? (
          <React.Fragment>
            <div>EXPAND</div>
            <div>
              <Icon iconName='ChevronDown' />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              <Icon iconName='ChevronUp' />
            </div>
            <div>COLLAPSE</div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default ToolLinkViewing;
