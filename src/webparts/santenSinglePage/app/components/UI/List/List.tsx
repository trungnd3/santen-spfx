import * as React from 'react';
import Section from '../Section/Section';

interface IListProps {
  title: string;
  showMore: string;
  id: string;
  bodyStyle?: React.CSSProperties;
  onShowMore?: () => {};
}

const List: React.FC<IListProps> = (props) => {
  return (
    <Section
      id={props.id}
      title={props.title}
      showMore={props.showMore}
      onShowMore={props.onShowMore}
    >
      <div style={props.bodyStyle}>{props.children}</div>
    </Section>
  );
};

export default List;
