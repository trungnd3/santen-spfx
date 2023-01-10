import classes from './CoverImg.module.scss';

const CoverImg = (props) => {
  return (
    <div>
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${props.src})` }}
      ></div>
    </div>
  );
};

export default CoverImg;
