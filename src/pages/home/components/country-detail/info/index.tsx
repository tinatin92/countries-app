import { PropsWithChildren } from "react";
import classes from "./index.module.css";

const Info: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.info}>{children}</div>;
};

export default Info;
