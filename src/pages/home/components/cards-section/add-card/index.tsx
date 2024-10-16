import { ChangeEvent, useState, FormEvent } from "react";
import classes from "./index.module.css";

type ArticleCreateFormProps = {
  onSubmit: (countryFields: {
    title: string;
    description: string;
    capital: string;
    population: string;
    image: string;
  }) => void;
  isPressed: boolean;
  
};

const AddCountry: React.FC<ArticleCreateFormProps> = ({
  onSubmit,
  isPressed,

}) => {
  const [errors, setErrors] = useState({
    title: false,
    capital: false,
    population: false,
    description: false,
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState(0);
  const [image, setImage] = useState<File | null>(null);  

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);

    if (value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, title: false }));
    }
    
  };

  const handleChangeCapital = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCapital(value);

    if (value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, capital: false }));
    }
  };

  const handleChangePopulation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPopulation(value);
    if (value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, population: false }));
    }
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    if (value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, description: false }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

 
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     const newErrors = {
      title: title.trim().length === 0,
      capital: capital.trim().length === 0,
      population: Number(population) <= 0,
      description: description.trim().length === 0,
    };
    
    setErrors(newErrors)

    if (Object.values(newErrors).some((error) => error)) {
      return; 
    }
     const imageUrl = image ? URL.createObjectURL(image) : "";

    onSubmit({
      title,
      capital,
      population: population.toString(),
      description,
      image: imageUrl
    });


    setTitle("")
    setCapital("")
    setDescription("")
    setPopulation(0)
    setImage(null)

  };

  return (
    <div className={`${classes.addform} ${isPressed ? classes.active : ""}`}>
      <form action="" onSubmit={handleSubmit} className= {classes.form}>
        <div>
          <label htmlFor="title">Country title</label>
          <input
            
            value={title}
            onChange={handleChangeTitle}
            
            type="text"
            name="title"
            id="title"
          />
           {errors.title && <p className={classes['error-text']}>Please enter Country name</p>}  
        </div>
        <div>
          <label htmlFor="capital">Capital</label>
          <input
            value={capital}
            onChange={handleChangeCapital}
            type="text"
            name="capital"
            id="capital"
          />
           {errors.capital && <p className={classes['error-text']}>Please enter Country capital</p>} 
        </div>
        <div>
          <label htmlFor="num">Country Population</label>
          <input
            value={population}
            onChange={handleChangePopulation}
            type="number"
            name="population"
            id="population"
          />
        {errors.population && <p className={classes['error-text']}>Please enter Country population</p>} 
        </div>
        <div>
          <label htmlFor="description">Country Description</label>
          <textarea
            value={description}
            onChange={handleChangeDescription}
            name="description"
            id="description"
          ></textarea>
           {errors.description && <p className={classes['error-text']}>Please enter Country description</p>} 
        </div>
        <div className={classes.image}>
          <label htmlFor="image">Country image</label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCountry;
