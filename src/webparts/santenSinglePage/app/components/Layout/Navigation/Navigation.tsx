import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

interface INavigationProps {}

const renderActiveClass = (navData: { isActive: boolean }): string =>
  navData.isActive ? classes.active : '';

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/corporate-news' className={renderActiveClass}>
              China
            </NavLink>
          </li>
          <li>
            <NavLink to='/corporate-news' className={renderActiveClass}>
              EMEA
            </NavLink>
          </li>
          <li>
            <NavLink to='/corporate-news' className={renderActiveClass}>
              North America
            </NavLink>
          </li>
          <li>
            <NavLink to='/corporate-news' className={renderActiveClass}>
              Bulletin Boards
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
