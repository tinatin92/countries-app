import { PropsWithChildren } from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card: React.FC<PropsWithChildren<{ id: string }>> = ({
  children,
  id,
}) => {
  return (
    <div className={classes["country-box"]}>
      <Link className={classes.link} to={`/countriedetail/${id}`}>
        {children}{" "}
      </Link>
    </div>
  );
};