import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';

// import { FiSend, FiCamera, FiImage, FiLink } from 'react-icons/fi';
import { useAppSelector, RootState } from '../../store';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './ToComment.module.scss';

const buttonSize = { height: '2.5em', width: '2.5em' };
// const iconSize = '2em';

interface IToCommentProps {}

const ToComment: React.FC<IToCommentProps> = () => {
  const currentProfile = useAppSelector(
    (state: RootState) => state.profile.data
  );

  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img
          src={
            !!currentProfile
              ? currentProfile.PictureUrl
              : 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
          }
          alt='avatar'
        />
      </div>
      <Input
        placeholder='Post your thoughts'
        buttonAttr={{
          icon: <Icon iconName='Send' />,
          size: buttonSize,
        }}
      />
      <div className={classes.interact}>
        <Button icon={<Icon iconName='Camera' />} size={buttonSize} />
        <Button icon={<Icon iconName='FileImage' />} size={buttonSize} />
        <Button icon={<Icon iconName='Link' />} size={buttonSize} />
      </div>
    </div>
  );
};

export default ToComment;
