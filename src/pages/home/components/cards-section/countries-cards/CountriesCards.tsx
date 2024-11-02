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
// import { COUNTRIES__DATA as initialCountries } from "@/pages/home/static/dummy-data.ts";
import { Link } from "react-router-dom";
// import { error } from "console";

const CountriesCards: React.FC = () => {
  const [countriesList, dispatch] = useReducer(countriesReducer, []);
  const [isCountryVisible, setIsCountryVisible] = useState(false);

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

  const handleEditCountry = (id: string) => {
    dispatch({ type: "restore", payload: { id } });
  };

  const handleCountryVisibility = () => {
    setIsCountryVisible((prev) => !prev);
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
                  {country.isMarkedForDelete && (
                    <Button
                      onClick={() => handleEditCountry(country.id)}
                      title={lang === "ka" ? "აღდგენა" : "Restore"}
                    />
                  )}
                </div>
              </CardInfo>
            </Card>
          ))}
        </Row>
      </Container>

      {/*  <div> {isLoading ?"loading ......." : (
        <div>
        {count?.map((con: any, index: number) => {
          return <div key={index}>{con.name.common}</div>;
        })}
      </div>
      )}</div> */}
    </section>
  );
};

export default CountriesCards;
