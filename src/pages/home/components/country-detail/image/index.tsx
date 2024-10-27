import { PropsWithChildren } from "react";
import classes from "./index.module.css";

const image: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.image}>{children}</div>;
};

export default image;
