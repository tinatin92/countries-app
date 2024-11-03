import { useState, useEffect } from "react";
import classes from "./index.module.css";

export type CountryData = {
  title: {
    en: string;
    ka: string;
  };
  capital: {
    en: string;
    ka: string;
  };
  population: string;
  image: string;
  description: {
    en: string;
    ka: string;
  };
  like: number;
  id: string;
  isMarkedForDelete: boolean;
};

interface EditCountryProps {
  countryData: CountryData | null; 
  onClose: () => void; 
  onUpdate: (updatedCountry: CountryData) => void; 
}

const EditCountry: React.FC<EditCountryProps> = ({
  countryData,
  onClose,
  onUpdate,
}) => {
  const [localCountryData, setLocalCountryData] = useState<CountryData | null>(
    null,
  );

  
  useEffect(() => {
    if (countryData) {
      setLocalCountryData(countryData);
    }
  }, [countryData]);

 
  if (!localCountryData) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const [key, langKey] = name.split(".") as [
      "title" | "capital" | "description",
      "en" | "ka",
    ];

    if (
      localCountryData &&
      key in localCountryData &&
      typeof localCountryData[key] === "object"
    ) {
      setLocalCountryData((prevData) => {
        if (prevData) {
          return {
            ...prevData,
            [key]: {
              ...prevData[key],
              [langKey]: value,
            },
          };
        }
        return prevData; 
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result; 
        if (result) {
          setLocalCountryData((prevData) => ({
            ...prevData!,
            image: result as string, 
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localCountryData) {
      onUpdate(localCountryData); 
      onClose(); 
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title.en"
            value={localCountryData.title.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>სათაური</label>
          <input
            type="text"
            name="title.ka"
            value={localCountryData.title.ka}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Capital</label>
          <input
            type="text"
            name="capital.en"
            value={localCountryData.capital.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>დედაქალაქი</label>
          <input
            type="text"
            name="capital.ka"
            value={localCountryData.capital.ka}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea className={classes.textarea}
            name="description.en"
            value={localCountryData.description.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>აღწერა</label>
          <textarea className={classes.textarea}
            name="description.ka"
            value={localCountryData.description.ka}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Population</label>
          <input
            type="number"
            name="population"
            value={localCountryData.population}
            onChange={(e) =>
              setLocalCountryData({
                ...localCountryData,
                population: e.target.value,
              })
            }
          />
        </div>

        <div className={classes.image}>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {localCountryData.image && (
          <img
            src={localCountryData.image}
            alt="Preview"
            style={{ width: "100px", height: "auto" }}
          />
        )}
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCountry;
