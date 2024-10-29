import { FormEvent, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
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
import { countriesReduser } from "../reducer/reducer";

import { COUNTRIES__DATA as initialCountries } from "@/pages/home/static/dummy-data.ts";
import { Link } from "react-router-dom";




const CountriesCards: React.FC = () => {
  const [countriesList, dispatch] = useReducer(
    countriesReduser,
    initialCountries,
  );
  const [isCountryVisible, setIsCountryVisible] = useState(false);

  const { lang } = useParams<{ lang: string }>();

  const handleLike = (id: string) => {
    dispatch({ type: "upLike", payload: { id } });
  };

  const handleSortCards = () => {
    dispatch({ type: "sort" });
  };

  const handleAddCountry = (
    e: FormEvent<HTMLFormElement>,
    countryData: CountryData,
  ) => {
    e.preventDefault();

    const newCountry = {
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
    };

    dispatch({
      type: "add",
      payload: newCountry,
    });

    setIsCountryVisible(false);
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const handleRestoreCountry = (id: string) => {
    dispatch({ type: "restore", payload: { id } });
  };

  const handleCountryVisibility = () => {
    setIsCountryVisible((prev) => !prev);
  };

  const translateCountryField = (field: { [key: string]: string }) => {
    return field[lang] || field["en"];
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
                      onClick={() => handleRestoreCountry(country.id)}
                      title={lang === "ka" ? "აღდგენა" : "Restore"}
                    />
                  )}
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
