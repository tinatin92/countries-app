import classes from "./CountryInfo.module.css";
import { PropsWithChildren } from "react";

export const CountryInfo: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes["countrie-text"]}>{children}</div>;
};
