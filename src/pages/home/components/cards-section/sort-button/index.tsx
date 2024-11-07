import React from "react";
import classes from "./index.module.css";

const Button: React.FC<{ onClick: () => void; title: string; disabled?: boolean }> = ({
  onClick,
  title,
  disabled = false,  // default to false if not provided
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={classes.button}>
      {title}
    </button>
  );
};

export default Button;
