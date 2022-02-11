export const Button = ({ onClick, className, txt }) => {
  const classes = 'btn ' + className;
  return (
    <button className={classes} onClick={onClick}>
      {txt}
    </button>
  );
};
