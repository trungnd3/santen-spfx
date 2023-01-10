import * as React from 'react';
import * as moment from 'moment';
import { Icon } from 'office-ui-fabric-react';
import classes from './Comment.module.scss';

interface ICommentProps {
  id: number;
  likes: number;
  content: string;
  avatar: string;
  createdDate: string;
  author: string;
  role: string;
}

const Comment: React.FC<ICommentProps> = (props) => {
  return (
    <div className={classes.comment}>
      <div className={classes.avatar}>
        <img src={props.avatar} alt='Avatar' />
      </div>
      <div className={classes.container}>
        <div className={classes.date}>
          {moment(props.createdDate).calendar()}
        </div>
        <div className={classes.author}>
          {props.author}, {props.role}
        </div>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.interact}>
          <div className={classes.like}>
            {/* <IconContext.Provider
              value={{ color: '#004097', className: 'global-class-name' }}
            >
              <BiLike />
            </IconContext.Provider> */}
            <Icon iconName='Like' />
            {props.likes} likes
          </div>
          <div className={classes.reply}>
            <Icon iconName='Reply' />
            Reply
          </div>
          <div className={classes.share}>
            <Icon iconName='Share' />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
