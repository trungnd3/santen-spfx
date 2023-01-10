import * as React from 'react';

import { useAppSelector, RootState } from '../../store';
import Grid from '../UI/Grid/Grid';
import Section from '../UI/Section/Section';
import classes from './CorporateInformation.module.scss';

interface ICorporateInformationProps {}

const CorporateInformation: React.FC<ICorporateInformationProps> = () => {
  const info = useAppSelector((state: RootState) => state.info.info);
  const glance = useAppSelector((state: RootState) => state.info.glance);

  return (
    <React.Fragment>
      <Grid
        title='CORPORATE INFORMATION'
        templateColumns={5}
        id='corporateInfoPosts'
      >
        {info.map((item) => (
          <div
            key={item.id}
            className={classes.corporateInfoItem}
            style={{
              backgroundImage: `url(${item.thumbnail})`,
            }}
          >
            <div className={classes.headline}>{item.headline}</div>
          </div>
        ))}
      </Grid>
      <Section title='WHO WE ARE, WHAT WE DO'>
        <div>
          <p>
            Santen is a Social Innovator that mobilizes key global technologies
            and players to resolve eye-related problems worldwide. Aiming to
            help people everywhere achieve happieness through vision, Santen has
            developed and is delivering eyecare solutions to some 43 million
            patients(*1) in more than 60 countries.
          </p>
        </div>
      </Section>
      <Section title='AT A GLANCE'>
        <div className={classes.glanceContainer}>
          <div className={classes.glance}>
            {glance.map((glanceItem) => (
              <div key={glanceItem.id} className={classes.glanceItemWrapper}>
                <div className={classes.glanceItem}>
                  <div>{glanceItem.text1}</div>
                  <div className={classes.keyValue}>
                    <div className={classes.value}>{glanceItem.value}</div>
                    {glanceItem.unit && (
                      <div className={classes.unit}>{glanceItem.unit}</div>
                    )}
                  </div>
                  <div>{glanceItem.text2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default CorporateInformation;
