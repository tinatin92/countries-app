import React, { useState } from "react";
import classes from "./index.module.css";

interface AddCountryProps {
  isPressed: boolean;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    countryData: CountryData,
  ) => void;
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
  image: string;
}


const AddCountry: React.FC<AddCountryProps> = ({ isPressed, onSubmit }) => {
  const [countryData, setCountryData] = useState<CountryData>({
    title: { en: "", ka: "" },
    capital: { en: "", ka: "" },
    description: { en: "", ka: "" },
    population: "",
    image: "",
  });

  const [togglelang, setToggleLang] = useState("ka");

  const handleLangKa = (index: string) => {
    setToggleLang("ka");
    console.log(index);
  };
  const handleLangEn = (index: string) => {
    setToggleLang("en");
    console.log(index);
  };
  const [errors, setErrors] = useState({
    title: { en: false, ka: false },
    capital: { en: false, ka: false },
    population: false,
    description: { en: false, ka: false },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".") as [keyof CountryData, "en" | "ka"];
  
    setCountryData((prev) => {
      // Check if the field is one of the nested objects (title, capital, description)
      if (field === "title" || field === "capital" || field === "description") {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [lang]: value,
          },
        };
      }
  
      // Handle non-nested fields like population and image
      return {
        ...prev,
        [field]: value,
      };
    });
  
    // Update errors if value is not empty
    if (value.trim().length > 0) {
      setErrors((prev) => {
        // Only update fields that exist in errors
        if (field === "title" || field === "capital" || field === "description") {
          return {
            ...prev,
            [field]: {
              ...prev[field as "title" | "capital" | "description"],
              [lang]: false,
            },
          };
        } else if (field === "population") {
          return {
            ...prev,
            population: false,
          };
        }
        return prev;
      });
    }
  };
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCountryData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      e.target.value = "";
      alert("Please select a valid image file (PNG or JPG only).");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      title: {
        en: countryData.title.en.trim().length === 0,
        ka: countryData.title.ka.trim().length === 0,
      },
      capital: {
        en: countryData.capital.en.trim().length === 0,
        ka: countryData.capital.ka.trim().length === 0,
      },
      population: countryData.population.trim().length === 0,
      description: {
        en: countryData.description.en.trim().length === 0,
        ka: countryData.description.ka.trim().length === 0,
      },
    };
    setErrors(newErrors);

    if (
      Object.values(newErrors).some((error) =>
        Object.values(error).some(Boolean),
      ) ||
      newErrors.population
    ) {
      return;
    }

    onSubmit(e, countryData);
    setCountryData({
      title: { en: "", ka: "" },
      capital: { en: "", ka: "" },
      description: { en: "", ka: "" },
      population: "",
      image: "",
    });
  };

  if (!isPressed) return null;

  return (
    <div className={`${classes.addform} ${isPressed ? classes.active : ""}`}>
      <div className={classes.buttons}>
        <div
          className={`${classes.toggle} ${
            togglelang === "ka" ? classes.active : ""
          }`}
          onClick={() => handleLangKa("ka")}
        >
          Georgian
        </div>
        <div
          className={`${classes.toggle} ${
            togglelang === "en" ? classes.active : ""
          }`}
          onClick={() => handleLangEn("en")}
        >
          English
        </div>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        {togglelang === "en" && (
          <div>
            <label>Tile:</label>
            <input
              type="text"
              name="title.en"
              value={countryData.title.en}
              onChange={handleChange}
            />
            {errors.title.en && (
              <p className={classes["error-text"]}>
                Please enter Country Title
              </p>
            )}
          </div>
        )}
        {togglelang === "ka" && (
          <div>
            <label>დასახელება:</label>
            <input
              type="text"
              name="title.ka"
              value={countryData.title.ka}
              onChange={handleChange}
            />
            {errors.title.ka && (
              <p className={classes["error-text"]}>
                გთხოვთ შეიყვანეთ ქვეყნის სახელი
              </p>
            )}
          </div>
        )}
        {togglelang === "en" && (
          <div>
            <label>Capital:</label>
            <input
              type="text"
              name="capital.en"
              value={countryData.capital.en}
              onChange={handleChange}
            />
            {errors.capital.en && (
              <p className={classes["error-text"]}>
                Please enter Country capital
              </p>
            )}
          </div>
        )}
        {togglelang === "ka" && (
          <div>
            <label>დედაქალაქი:</label>
            <input
              type="text"
              name="capital.ka"
              value={countryData.capital.ka}
              onChange={handleChange}
            />
            {errors.capital.ka && (
              <p className={classes["error-text"]}>
                გთხოვთ შეიყვანეთ ქვეყნის დედაქალაქი
              </p>
            )}
          </div>
        )}
        {togglelang === "en" && (
          <div>
            <label>Description:</label>
            <textarea
              name="description.en"
              value={countryData.description.en}
              onChange={handleChange}
            />
            {errors.description.en && (
              <p className={classes["error-text"]}>
                Please enter Country description
              </p>
            )}
          </div>
        )}
        {togglelang === "ka" && (
          <div>
            <label>აღწერა:</label>
            <textarea
              name="description.ka"
              value={countryData.description.ka}
              onChange={handleChange}
            />
            {errors.description.ka && (
              <p className={classes["error-text"]}>
                გთხოვთ შეიყვანეთ ქვეყნის აღწერა
              </p>
            )}
          </div>
        )}
        <div>
          <label>{togglelang === "en" ? "Population:" : "მოსახლეობა:"}</label>
          <input
            type="number"
            name="population"
            value={countryData.population}
            onChange={(e) =>
              setCountryData({ ...countryData, population: e.target.value })
            }
          />
          {errors.population &&
            (togglelang === "en" ? (
              <p className={classes["error-text"]}>
                Please enter Country Population
              </p>
            ) : (
              <p className={classes["error-text"]}>
                გთხოვთ შეიყვანეთ ქვეყნის მოსახლეობა
              </p>
            ))}
        </div>
        <div className={classes.image}>
          <label>{togglelang === "en" ? "Image:" : "სურათი"}</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {countryData.image && (
          <img
            src={countryData.image}
            alt="Preview"
            style={{ width: "100px", height: "auto" }}
          />
        )}{" "}
        {/* Image preview */}
        <button type="submit">Add Country</button>
      </form>
    </div>
  );
};

export default AddCountry;
