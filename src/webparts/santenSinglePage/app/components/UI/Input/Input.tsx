import * as React from 'react';

import Button from '../Button/Button';
import classes from './Input.module.scss';
import { IButtonProps } from '../Button/IButtonProps';

interface IInputProps {
  placeholder: string;
  buttonAttr: IButtonProps;
}
const Input: React.FC<IInputProps> = (props) => {
  return (
    <div className={classes.inputContainer}>
      <input placeholder={props.placeholder} />
      <Button {...props.buttonAttr} />
    </div>
  );
};

export default Input;
