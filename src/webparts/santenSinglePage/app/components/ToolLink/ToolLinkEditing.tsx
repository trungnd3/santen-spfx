import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';

import Section from '../UI/Section/Section';
import classes from './ToolLinkEditing.module.scss';
import ITool from '../../store/interfaces/ITool';

interface IRegion {
  id: number;
  name: string;
}
interface ICategories {
  general: string;
  policy: string;
  internal: string;
}
interface ICategorizedItem {
  category: string;
  values: ITool[];
}
const REGIONS: IRegion[] = [
  { id: 1, name: 'JAPAN' },
  { id: 2, name: 'EMEA' },
  { id: 3, name: 'CHINA' },
  { id: 4, name: 'AMERICAS' },
  { id: 5, name: 'ASIA' },
];

const CATEGORIES: ICategories = {
  general: 'General Office System',
  policy: 'Regulation / Policy / Compliance',
  internal: 'Internal Sites',
};

interface IToolLinkEditingProps {
  totalList: ITool[];
  closeHandler: () => void;
}

const ToolLinkEditing: React.FC<IToolLinkEditingProps> = (props) => {
  const [selectedRegion, setSelectedRegion] = React.useState(1);
  const [selectedTools, setSelectedTools] = React.useState([1, 2, 3, 4, 5]);

  const categorizedList = props.totalList.reduce(
    (accumulator, currentValue) => {
      const curCate = currentValue.category;
      if (!curCate) {
        return accumulator;
      }
      const accumulatorIds = accumulator.map((a) => a.category);
      const idx = accumulatorIds.indexOf(curCate);
      if (idx < 0) {
        accumulator.push({
          category: curCate,
          values: [{ ...currentValue }],
        });
      } else {
        accumulator[idx].values.push({ ...currentValue });
      }
      return accumulator;
    },
    []
  );

  const selectRegionHandler = (event: React.MouseEvent): void => {
    setSelectedRegion(
      parseInt(event.currentTarget.getAttribute('data-region'))
    );
  };

  const selectToolHandler = (event: React.MouseEvent): void => {
    const toolId = parseInt(event.currentTarget.getAttribute('data-tool'));
    setSelectedTools((prevSelectedTools) => {
      const updated = [...prevSelectedTools];
      const index = updated.indexOf(toolId);

      if (index !== -1) {
        updated.splice(index, 1);
      } else {
        updated.push(toolId);
      }

      return updated;
    });
  };

  return (
    <Section id='toolsLinksEditing' title='TOOLS & LINKS'>
      <div className={classes.container}>
        <div className={classes.header}>
          <div>You may select up to 24 items.</div>
          <div className={classes.regions}>
            {REGIONS.map((item: IRegion) => (
              <div
                key={item.id}
                data-region={item.id}
                className={`${classes.region} ${
                  selectedRegion === item.id ? classes.active : ''
                }`}
                onClick={selectRegionHandler}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.body}>
          {categorizedList.map((cItem: ICategorizedItem) => (
            <div key={cItem.category} className={classes.category}>
              <div className={classes.headline}>
                {CATEGORIES[cItem.category as keyof ICategories]}
              </div>
              <div className={classes.tools}>
                {cItem.values.map((item: ITool) => (
                  <div
                    key={item.id}
                    data-tool={item.id}
                    className={classes.item}
                    onClick={selectToolHandler}
                  >
                    <div className={classes.selecting}>
                      <Icon
                        iconName='CheckMark'
                        className={`${
                          selectedTools.indexOf(item.id) > -1
                            ? classes.selected
                            : ''
                        }`}
                      />
                    </div>
                    <div className={classes.icon}>
                      <Icon iconName='UserSync' />
                    </div>
                    <div className={classes.name}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.footer}>
          <div className={classes.reset}>RESET TOOLS</div>
          <div className={classes.done} onClick={props.closeHandler}>
            DONE
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ToolLinkEditing;
