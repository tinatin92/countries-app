import classes from "./index.module.css";

const Button: React.FC<{ onClick: () => void; title: string }> = ({
  onClick,
  title,
}) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {title}
    </button>
  );
};

export default Button;
