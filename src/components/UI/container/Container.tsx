import React from "react";
import { PropsWithChildren } from "react";
import classes from "./Container.module.css";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
