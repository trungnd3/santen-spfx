import * as React from 'react';
import classes from './Footer.module.scss';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.metadata}>
          <div>Accessibility</div>
          <div>|</div>
          <div>Terms of User</div>
          <div>|</div>
          <div>Privacy Policy</div>
          <div>|</div>
          <div>Contact</div>
          <div>|</div>
          <div>Sitemap</div>
        </div>
        <hr className={classes.linebreak} />
        <div className={classes.copyright}>
          <p>
            Copyright 2022 Santen Pharmaceutical Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
