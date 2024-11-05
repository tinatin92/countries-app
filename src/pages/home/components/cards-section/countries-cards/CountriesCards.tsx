import { FormEvent, /* useReducer, */ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import AddCountry from "../add-card";
import classes from "./CountriesCards.module.css";
import { Container } from "@/components/UI/container";
import { H1 } from "@/components/h1";
import { Card } from "../card/Card";
import { CardImage } from "../image/CardImage";
import { CardInfo } from "../card-info/CardInfo";
import { CountryInfo } from "../country-info/CountryInfo";
import { InfoBody } from "../info-body/InfoBody";
import { Row } from "@/components/UI/row";
import LikeBox from "../like";
import Button from "../sort-button";

import { CountryData } from "../add-card/index";
import { Link } from "react-router-dom";
import EditCountry from "../edit-card/index";
import {
  getCountries,
  deleteCountry,
  addCaontry,
  updateCountry,
  likeCountry,
 
} from "@/api/countries";

interface Country {
  title: { [key: string]: string };
  capital: { [key: string]: string };
  description: { [key: string]: string };
  population: string;
  image: string;
  like: number;
  id: string;
  isMarkedForDelete: boolean;
}

const CountriesCards: React.FC = () => {
  const [isCountryVisible, setIsCountryVisible] = useState(false);
  const [countryToEdit, setCountryToEdit] = useState<CountryData | null>(null);

  const [countriesList, setCountriesList] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then((countries) => {
      return setCountriesList(countries);
    });
  }, []);

  const { lang } = useParams<{ lang: string }>();

  const handleLike = async (id: number) => {
    try {
      const likedCountry = await likeCountry(id);
      setCountriesList((prevCountry) => {
        return prevCountry.map((country) => {
          if (country.id === likedCountry.id) {
            return { ...country, like: country.like + 1 };
          } else {
            return country;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortCards = async () => {
    /* try {
      const response = await sortCountries();

      console.log("Countries fetched:", response);

      if (response && response.length > 0) {
        const sortedData = response.sort((a: Country, b: Country) => {
          return b.like - a.like;

         
        });

        setCountriesList(sortedData);
      }
      
       await Promise.all(sortedData.map(country => 
                getSortedCountries(country) // Assuming this sends the country data back to the server
            ));

    } catch (error) {
      console.log("Error sorting countries:", error);
    } */
  };

  const handleAddCountry = async (
    e: FormEvent<HTMLFormElement>,
    countryData: CountryData,
  ) => {
    e.preventDefault();

    const newCountry: CountryData = {
      title: {
        en: countryData.title.en,
        ka: countryData.title.ka,
      },
      capital: {
        en: countryData.capital.en,
        ka: countryData.capital.ka,
      },
      description: {
        en: countryData.description.en,
        ka: countryData.description.ka,
      },
      population: countryData.population,
      image: countryData.image,
      like: 0,
      id: (Number(countriesList.at(-1)?.id) + 1).toString(),
      isMarkedForDelete: false,
    };

    try {
      const addedCountry = await addCaontry(newCountry);

      setCountriesList((prevCountries) => [...prevCountries, addedCountry]);

      setIsCountryVisible(false);
    } catch (error) {
      console.error("Failed to add country:", error);
    }
  };

  const handleDeleteCountry = async (id: string) => {
    try {
      await deleteCountry(id);

      setCountriesList((prevCountries) => {
        return prevCountries.filter((country) => country.id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCountry = (country: Country) => {
    const countryData: CountryData = {
      title: {
        en: country.title.en,
        ka: country.title.ka,
      },
      capital: {
        en: country.capital.en,
        ka: country.capital.ka,
      },
      description: {
        en: country.description.en,
        ka: country.description.ka,
      },
      population: country.population,
      image: country.image,
      like: country.like,
      id: country.id,
      isMarkedForDelete: country.isMarkedForDelete,
    };

    setCountryToEdit(countryData);
  };

  const handleCountryUpdate = async (countryToUpdate: CountryData) => {
    try {
      const updatedCountry = await updateCountry(countryToUpdate);
      setCountryToEdit(null);
      setCountriesList((prevCountries) => {
        return prevCountries.map((country) => {
          if (country.id === updatedCountry.id) {
            return updatedCountry;
          } else {
            return country;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountryVisibility = () => {
    setIsCountryVisible((prev) => !prev);
    setCountryToEdit(null);
  };

  const translateCountryField = (field: { [key: string]: string }) => {
    return lang ? field[lang] || field["en"] : field["en"];
  };

  return (
    <section className={classes.countries}>
      <Container>
        <div className={classes.heading}>
          <H1 heading={lang === "ka" ? "ქვეყნები" : "Countries"} />
          <div className={classes["header-buttons"]}>
            <Button onClick={handleCountryVisibility} title="Add country" />
            <Button onClick={handleSortCards} title="Sort by likes" />
          </div>
        </div>
        <AddCountry isPressed={isCountryVisible} onSubmit={handleAddCountry} />

        {countryToEdit && (
          <EditCountry
            countryData={countryToEdit}
            onClose={() => setCountryToEdit(null)}
            onUpdate={handleCountryUpdate}
          />
        )}

        <Row className={classes["card-row"]}>
          {countriesList.map((country) => (
            <Card
              isMarkedForDelete={country.isMarkedForDelete}
              key={country.id}
            >
              <CardImage>
                <img
                  src={country.image}
                  alt={translateCountryField(country.title)}
                />
              </CardImage>
              <CardInfo>
                <h2>{translateCountryField(country.title)}</h2>
                <InfoBody>
                  <LikeBox
                    like={country.like}
                    onClick={() => handleLike(+country.id)}
                  />
                  <CountryInfo>
                    <div>{lang === "ka" ? "დედაქალაქი:" : "Capital:"}</div>{" "}
                    {translateCountryField(country.capital)}
                  </CountryInfo>
                  <CountryInfo>
                    <div>{lang === "ka" ? "მოსახლეობა:" : "Population:"}</div>
                    {country.population
                      ? Number(country.population).toLocaleString()
                      : "N/A"}
                  </CountryInfo>
                </InfoBody>
                <Link
                  className={classes.seemore}
                  to={`countriedetail/${country.id}`}
                >
                  {lang === "ka" ? "მეტის ნახვა" : "See more"}
                </Link>
                <div className={classes.buttons}>
                  <Button
                    onClick={() => handleDeleteCountry(country.id)}
                    title={lang === "ka" ? "წაშლა" : "Delete"}
                  />

                  <Button
                    onClick={() => handleEditCountry(country)}
                    title={lang === "ka" ? "შესწორება" : "Edit"}
                  />
                </div>
              </CardInfo>
            </Card>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CountriesCards;
