import { PropsWithChildren } from "react";
import classes from "./Card.module.css";


export const Card: React.FC<PropsWithChildren<{isMarkedForDelete:boolean}>> = ({
  children,isMarkedForDelete

}) => {
  return (
    <div className={`${classes['country-box']} ${isMarkedForDelete ? classes.border : ''}`}>

      {children}
    </div>
  );
};
