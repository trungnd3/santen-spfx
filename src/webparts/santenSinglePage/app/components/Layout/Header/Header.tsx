import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

import Input from '../../UI/Input/Input';
import { useAppSelector, RootState } from '../../../store';
import classes from './Header.module.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const currentProfile = useAppSelector(
    (state: RootState) => state.profile.data
  );

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.wrapper}>
          <div className={classes.start}>
            <div>
              <img
                src={require('../../../../assets/symbol_logo.svg')}
                alt='Logo'
              />
            </div>
          </div>
          <div className={classes.middle}>
            <Input
              placeholder='Search by keyword or topic'
              buttonAttr={{
                text: 'Find',
                icon: <Icon iconName='search' />,
                size: { height: '2em' },
              }}
            />
          </div>
          <div className={classes.end}>
            <div className={classes.translate}>
              <img
                src={require('../../../../assets/dialogue.png')}
                alt='Translate'
              />
            </div>
            <div className={classes.avatar}>
              <img
                src={
                  !!currentProfile
                    ? currentProfile.PictureUrl
                    : 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
                }
                alt='Avatar'
              />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
