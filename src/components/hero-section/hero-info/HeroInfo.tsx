import { PropsWithChildren } from "react";
import classes from "./HeroInfo.module.css";

export const HeroInfo: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes["hero-section__info"]}>{children}</div>;
};
