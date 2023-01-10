import * as React from 'react';

import classes from './Button.module.scss';
import { IButtonProps } from './IButtonProps';

const Button: React.FC<IButtonProps> = ({ text, icon, size }) => {
  return (
    <button className={classes.button} style={size}>
      {text && <span>{text}</span>}
      {icon}
    </button>
  );
};

export default Button;
