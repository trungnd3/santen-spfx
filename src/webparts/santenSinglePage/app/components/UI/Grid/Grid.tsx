import * as React from 'react';
import { useState, useEffect } from 'react';

import { useAppSelector, RootState } from '../../../store';
import Section from '../Section/Section';
import classes from './Grid.module.scss';

interface IGridProps {
  style?: React.CSSProperties;
  templateColumns?: number;
  templateColumnsMobile?: number;
  title: string;
  id: string;
  showMore?: string;
  onShowMore?: () => void;
  edit?: string;
  onEdit?: () => void;
}

const Grid: React.FC<IGridProps> = (props) => {
  const [style, setStyles] = useState({ ...props.style });
  const { width } = useAppSelector(
    (state: RootState) => state.dimension.webpart
  );

  useEffect(() => {
    if (width > 767) {
      setStyles((prevStyle: React.CSSProperties) => ({
        ...prevStyle,
        gridTemplateColumns: `repeat(${
          props.templateColumns || 4
        }, minmax(0, 1fr))`,
      }));
    } else {
      setStyles((prevStyle: React.CSSProperties) => ({
        ...prevStyle,
        gridTemplateColumns: `repeat(${
          props.templateColumnsMobile || 2
        }, minmax(0, 1fr))`,
      }));
    }
  }, [width, props.templateColumns, props.templateColumnsMobile]);

  return (
    <Section {...props}>
      <div className={classes.grid} style={style}>
        {props.children}
      </div>
    </Section>
  );
};

export default Grid;
