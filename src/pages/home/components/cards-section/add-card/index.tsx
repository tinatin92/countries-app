import { FormEvent } from "react";
import classes from "./index.module.css";

type ArticleCreateFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPressed: boolean
  
};

const AddCountry: React.FC<ArticleCreateFormProps> = ({ onSubmit, isPressed}) => {
  return (
    <div className={`${classes.addform} ${isPressed ? classes.active : ''}`}>
      <form action="" onSubmit={onSubmit} className={classes.form}>
        <div>
          <label htmlFor="title">Country title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="title">Capital</label>
          <input type="text" name="capital" id="capital" />
        </div>
        <div>
          <label htmlFor="num">Country Population</label>
          <input type="number" name="population" id="population" />
        </div>
        <div>
          <label htmlFor="description">Country Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCountry;
