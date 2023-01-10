import * as React from 'react';

import { useAppSelector, RootState } from '../../store';
import ToolLinkViewing from './ToolLinkViewing';
import classes from './ToolLink.module.scss';
import ToolLinkEditing from './ToolLinkEditing';

interface IToolLinkProps {}

const ToolLink: React.FC<IToolLinkProps> = () => {
  const [editing, setEditing] = React.useState(false);
  const toolLinkList = useAppSelector((state: RootState) => state.tools.items);
  const { width } = useAppSelector(
    (state: RootState) => state.dimension.webpart
  );

  return (
    <div className={classes.container} style={{ width: `${width - 9}px` }}>
      <div className={classes.inner}>
        {editing ? (
          <ToolLinkEditing
            totalList={toolLinkList}
            closeHandler={() => setEditing(false)}
          />
        ) : (
          <ToolLinkViewing
            totalList={toolLinkList}
            editHandler={() => setEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ToolLink;
