import { FormEvent, useReducer, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
import { countriesReducer } from "../reducer/reducer";
import { CountryData } from "../add-card/index";
import { Link } from "react-router-dom";
import EditCountry from '../edit-card/index';



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
  const [countriesList, dispatch] = useReducer(countriesReducer, []);
  const [isCountryVisible, setIsCountryVisible] = useState(false);
  const [countryToEdit, setCountryToEdit] = useState<CountryData | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/countries")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "setInitialData", payload: response.data });
      })
      .catch((error) => {
        console.error("Failed to fetch countries:", error);
      });
  }, []);

  const { lang } = useParams<{ lang: string }>();

  const handleLike = (id: string) => {
    dispatch({ type: "upLike", payload: { id } });
  };

  const handleSortCards = () => {
    dispatch({ type: "sort" });
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
      const response = await axios.post(
        "http://localhost:3000/countries",
        newCountry,
      );

      dispatch({
        type: "add",
        payload: response.data,
      });
      setIsCountryVisible(false);
    } catch (error) {
      console.error("Failed to add country:", error);
    }
  };

  const handleDeleteCountry = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/countries/${id}`);
      dispatch({ type: "delete", payload: { id } });
    } catch (error) {
      console.log("Failed to delete country", error);
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

  const handleCountryUpdate = async (updatedCountry: CountryData) => {
    try {
      const response = await axios.put(`http://localhost:3000/countries/${updatedCountry.id}`, updatedCountry);
      dispatch({
        type: "update",
        payload: response.data,
      });
      setCountryToEdit(null); // Close the edit form after updating
    } catch (error) {
      console.error("Failed to update country:", error);
    }
  };

  const handleCountryVisibility = () => {
    setIsCountryVisible((prev) => !prev);
    setCountryToEdit(null); // Reset country to edit when toggling visibility
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
            onUpdate={handleCountryUpdate} // Pass the update handler
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
                    onClick={() => handleLike(country.id)}
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
