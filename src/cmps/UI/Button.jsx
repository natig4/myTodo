export const Button = ({ onClick, className, txt }) => {
  const classes = 'btn ' + className;
  return (
    <div className={classes} onClick={onClick}>
      {txt}
    </div>
  );
};
