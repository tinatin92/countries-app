import React, { useState } from "react";
import classes from "./index.module.css";

interface AddCountryProps {
  isPressed: boolean;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    countryData: CountryData,
  ) => void;
}

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

export interface GetCountriesResponse {
  countries: CountryData[];
}

export type AddUpdateCountryResponse = CountryData;

const AddCountry: React.FC<AddCountryProps> = ({ isPressed, onSubmit }) => {
  const [countryData, setCountryData] = useState<CountryData>({
    title: { en: "", ka: "" },
    capital: { en: "", ka: "" },
    description: { en: "", ka: "" },
    population: "",
    image: "",
    like: 0,
    id: "", // Consider generating a unique ID
    isMarkedForDelete: false,
  });

  const [toggleLang, setToggleLang] = useState<"en" | "ka">("ka");
  const [errors, setErrors] = useState({
    title: { en: false, ka: false },
    capital: { en: false, ka: false },
    population: false,
    description: { en: false, ka: false },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".") as [keyof CountryData, "en" | "ka"];

    setCountryData((prev) => {
      if (field === "title" || field === "capital" || field === "description") {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [lang]: value,
          },
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });

    if (value.trim().length > 0) {
      setErrors((prev) => {
        if (
          field === "title" ||
          field === "capital" ||
          field === "description"
        ) {
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
    // Reset country data after submission
    setCountryData({
      title: { en: "", ka: "" },
      capital: { en: "", ka: "" },
      description: { en: "", ka: "" },
      population: "",
      image: "",
      like: 0,
      id: "", // Reset ID
      isMarkedForDelete: false,
    });
  };

  if (!isPressed) {
    return null; // Return null if not pressed
  }

  return (
    <div className={`${classes.addform} ${isPressed ? classes.active : ""}`}>
      <div className={classes.buttons}>
        <div
          className={`${classes.toggle} ${toggleLang === "ka" ? classes.active : ""}`}
          onClick={() => setToggleLang("ka")}
        >
          Georgian
        </div>
        <div
          className={`${classes.toggle} ${toggleLang === "en" ? classes.active : ""}`}
          onClick={() => setToggleLang("en")}
        >
          English
        </div>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        {/* Title Input */}
        <div>
          <label>{toggleLang === "en" ? "Title:" : "დასახელება:"}</label>
          <input
            type="text"
            name={`title.${toggleLang}`}
            value={
              toggleLang === "en" ? countryData.title.en : countryData.title.ka
            }
            onChange={handleChange}
          />
          {errors.title[toggleLang] && (
            <p className={classes["error-text"]}>
              {toggleLang === "en"
                ? "Please enter Country Title"
                : "გთხოვთ შეიყვანეთ ქვეყნის სახელი"}
            </p>
          )}
        </div>
        {/* Capital Input */}
        <div>
          <label>{toggleLang === "en" ? "Capital:" : "დედაქალაქი:"}</label>
          <input
            type="text"
            name={`capital.${toggleLang}`}
            value={
              toggleLang === "en"
                ? countryData.capital.en
                : countryData.capital.ka
            }
            onChange={handleChange}
          />
          {errors.capital[toggleLang] && (
            <p className={classes["error-text"]}>
              {toggleLang === "en"
                ? "Please enter Country Capital"
                : "გთხოვთ შეიყვანეთ ქვეყნის დედაქალაქი"}
            </p>
          )}
        </div>
        {/* Description Input */}
        <div>
          <label>{toggleLang === "en" ? "Description:" : "აღწერა:"}</label>
          <textarea
            name={`description.${toggleLang}`}
            value={
              toggleLang === "en"
                ? countryData.description.en
                : countryData.description.ka
            }
            onChange={handleChange}
          />
          {errors.description[toggleLang] && (
            <p className={classes["error-text"]}>
              {toggleLang === "en"
                ? "Please enter Country Description"
                : "გთხოვთ შეიყვანეთ ქვეყნის აღწერა"}
            </p>
          )}
        </div>
        {/* Population Input */}
        <div>
          <label>{toggleLang === "en" ? "Population:" : "მოსახლეობა:"}</label>
          <input
            type="number"
            name="population"
            value={countryData.population}
            onChange={(e) =>
              setCountryData({ ...countryData, population: e.target.value })
            }
          />
          {errors.population && (
            <p className={classes["error-text"]}>
              {toggleLang === "en"
                ? "Please enter Country Population"
                : "გთხოვთ შეიყვანეთ ქვეყნის მოსახლეობა"}
            </p>
          )}
        </div>
        {/* Image Input */}
        <div className={classes.image}>
          <label>{toggleLang === "en" ? "Image:" : "სურათი"}</label>
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
        )}
        <button type="submit">Add Country</button>
      </form>
    </div>
  );
};

export default AddCountry;
