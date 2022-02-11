const Card = ({ children, className, onClick }) => {
  const classes = 'card ' + className;
  return (
    <div className={classes} onClick={onClick}>
      {children}{' '}
    </div>
  );
};

export default Card;
