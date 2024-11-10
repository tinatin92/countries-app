import React from "react";
import { Todo } from ".";
import classes from './index.module.css'


interface TodoCard extends React.HTMLAttributes<HTMLDivElement> {
  todo: Todo;
}

const Card: React.FC<TodoCard> = ({ todo, ...props }) => {
  //+

  return <div className={classes.title} key={todo.id} {...props}>{todo.title}</div>;
};

export default Card;
