import React, { useState } from 'react';
import classes from './index.module.css'

interface AddCountryProps {
  isPressed: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, countryData: CountryData) => void;
 
}

interface CountryData {
  title: {
    en: string;
    ka: string;
  };
  capital: {
    en: string;
    ka: string;
  };
  description: {
    en: string;
    ka: string;
  };
  population: string;
  image: string; // Added for image URL
}

const AddCountry: React.FC<AddCountryProps> = ({ isPressed, onSubmit,}) => {
  const [countryData, setCountryData] = useState<CountryData>({
    title: { en: '', ka: '' },
    capital: { en: '', ka: '' },
    description: { en: '', ka: '' },
    population: '',
    image: '', // Initialize as empty
  });

  const [errors, setErrors] = useState({
    title: { en: false, ka: false },
    capital: { en: false, ka: false },
    population: false,
    description: { en: false, ka: false },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [field, lang] = name.split('.');
    console.log(field, name, lang)

    setCountryData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value,
      },
    }));

    if (value.trim().length > 0) {
      setErrors((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: false,
        },
      }));
    }

  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCountryData((prev) => ({
          ...prev,
          image: reader.result as string, // Set the base64 image string
        }));
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   
    const newErrors = {
      title: {
        en: countryData.title.en.trim().length === 0,
        ka: countryData.title.ka.trim().length === 0,
      },
      capital: {
        en: countryData.capital.en.trim().length === 0,
        ka: countryData.capital.ka.trim().length === 0,
      },
      population: Number(countryData.population) <= 0,
      description: {
        en: countryData.description.en.trim().length === 0,
        ka: countryData.description.ka.trim().length === 0,
      },
    };
    setErrors(newErrors);

    // If any errors are present, do not submit
    if (
      Object.values(newErrors).some((error) => Object.values(error).some(Boolean)) ||
      newErrors.population
    ) {
      return; // Early return if there are validation errors
    }
    

    onSubmit(e, countryData);
    setCountryData({
      title: { en: '', ka: '' },
      capital: { en: '', ka: '' },
      description: { en: '', ka: '' },
      population: '',
      image: '', // Reset the image field
    }); // Reset the form after submission
  };

  if (!isPressed) return null;

  return (
    <div className={`${classes.addform} ${isPressed ? classes.active : ""}`}>
    <form onSubmit={handleSubmit} className= {classes.form}>
      <div>
        <label>Title (EN):</label>
        <input type="text" name="title.en" value={countryData.title.en} onChange={handleChange}  />
        {errors.title.en && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Title (KA):</label>
        <input type="text" name="title.ka" value={countryData.title.ka} onChange={handleChange}  />
        {errors.title.en && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Capital (EN):</label>
        <input type="text" name="capital.en" value={countryData.capital.en} onChange={handleChange}  />
        {errors.capital.en && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Capital (KA):</label>
        <input type="text" name="capital.ka" value={countryData.capital.ka} onChange={handleChange}  />
        {errors.capital.ka && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Description (EN):</label>
        <textarea name="description.en" value={countryData.description.en} onChange={handleChange}  />
        {errors.description.en && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Description (KA):</label>
        <textarea name="description.ka" value={countryData.description.ka} onChange={handleChange}  />
        {errors.description.ka && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div>
        <label>Population:</label>
        <input type="number" name="population" value={countryData.population} onChange={(e) => setCountryData({ ...countryData, population: e.target.value })}  />
        {errors.population && <p className={classes['error-text']}>Please enter Country Title</p>} 
      </div>
      <div className={classes.image}>
        <label>Image:</label>
        <input type="file" id='image' name="image" accept="image/*" onChange={handleImageChange}   />
      </div>
      {countryData.image && <img src={countryData.image} alt="Preview" style={{ width: '100px', height: 'auto' }} />} {/* Image preview */}
      <button type="submit">Add Country</button>
    </form>
    </div>
  );
};

export default AddCountry;
