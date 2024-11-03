import { useState, useEffect } from "react";
import classes from './index.module.css';

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
  countryData: CountryData | null; // Make it nullable
  onClose: () => void; // Prop for closing the edit form
  onUpdate: (updatedCountry: CountryData) => void; // Prop for updating the country data
}

const EditCountry: React.FC<EditCountryProps> = ({ countryData, onClose, onUpdate }) => {
  const [localCountryData, setLocalCountryData] = useState<CountryData | null>(null);

  // Initialize local state when countryData changes
  useEffect(() => {
    if (countryData) {
      setLocalCountryData(countryData);
    }
  }, [countryData]);

  // Render nothing if no country data is available
  if (!localCountryData) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [key, langKey] = name.split('.') as ['title' | 'capital' | 'description', 'en' | 'ka'];

    if (localCountryData && key in localCountryData && typeof localCountryData[key] === 'object') {
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
        return prevData; // Fallback in case of null
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result; // Use optional chaining to safely access result
        if (result) {
          setLocalCountryData((prevData) => ({
            ...prevData!,
            image: result as string, // Update the localCountryData with the new image URL
          }));
        }
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localCountryData) {
      onUpdate(localCountryData); // Call the update function passed via props
      onClose(); // Close the edit form after updating
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label>Title (English)</label>
          <input
            type="text"
            name="title.en"
            value={localCountryData.title.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Title (Georgian)</label>
          <input
            type="text"
            name="title.ka"
            value={localCountryData.title.ka}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Capital (English)</label>
          <input
            type="text"
            name="capital.en"
            value={localCountryData.capital.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Capital (Georgian)</label>
          <input
            type="text"
            name="capital.ka"
            value={localCountryData.capital.ka}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description (English)</label>
          <textarea
            name="description.en"
            value={localCountryData.description.en}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description (Georgian)</label>
          <textarea
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
              setLocalCountryData({ ...localCountryData, population: e.target.value })
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
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditCountry;
