import { PropsWithChildren } from "react";
import classes from "./Wapper.module.css";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
