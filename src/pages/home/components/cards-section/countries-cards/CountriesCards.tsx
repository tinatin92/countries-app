import { FormEvent, useReducer, useState } from "react";
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
  const [countriesList, dispatch] = useReducer(countriesReduser, initialCountries);
  const [isCountryVisible, setIsCountryVisible] = useState(false);


  const handleLike = (id: string) => {
    dispatch({ type: "upLike", payload: { id } });
  };

  
  const handleSortCards = () => {
    dispatch({ type: "sort" });
  };


  const handleAddCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCountry: { [key: string]: FormDataEntryValue | string } = {};
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData) {
      newCountry[key] = value;
    }

    const imageFile = formData.get('image') as File | null;
    const image = imageFile? URL.createObjectURL(imageFile) : ''


    dispatch({
      type: "add",
      payload: {
        ...newCountry,
        image,
        like: 0,
        id: Number(countriesList.at(-1)?.id) + 1,
  
      },
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

  return (
    <section className={classes.countries}>
      <Container>
        <div className={classes.heading}>
          <H1 heading="Countries" />
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
                <img src={country.image} alt={country.title} />
              </CardImage>
              <CardInfo>
                <h2>{country.title}</h2>
                <InfoBody>
                  <LikeBox
                    like={country.like}
                    onClick={() => handleLike(country.id)}
                  />

                  <CountryInfo>
                    <div>Capital:</div> {country.capital}
                  </CountryInfo>
                  <CountryInfo>
                    <div>Population:</div>
                    {country.population
                      ? Number(country.population).toLocaleString()
                      : "N/A"}
                  </CountryInfo>
                </InfoBody>

                <Link
                  className={classes.seemore}
                  to={`/countriedetail/${country.id}`}
                >
                  See more
                </Link>
                <div className={classes.buttons}>
                  <Button
                    onClick={() => handleDeleteCountry(country.id)}
                    title="Delete"
                  />

                  {country.isMarkedForDelete && (
                    <Button
                      onClick={() => handleRestoreCountry(country.id)}
                      title="Restore"
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
