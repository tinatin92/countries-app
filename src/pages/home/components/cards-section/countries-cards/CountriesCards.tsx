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
import { countriesReduser } from '../reducer/reducer'

import { COUNTRIES__DATA } from "@/pages/home/static/dummy-data.ts";
import { Link } from "react-router-dom";

import damyImage from "@/assets/japan 2.png";

const CountriesCards: React.FC = () => {
   
  const [countriesList, dispatch] = useReducer(countriesReduser, COUNTRIES__DATA)

  // const [countries, setCountries] = useState(COUNTRIES__DATA);
  const [isCountryVisible, setIsCountryVisible] = useState(false); 

  const handleLike = (id: string) => {
    const copiedCountriesList = countries.map((country) => {
      if (country.id === id) {
        return { ...country, like: country.like + 1 };
      }
      return { ...country };
    });

    setCountries(copiedCountriesList);
  };

  const handleSortCards = () => {
    const sortedCountries = [...countries].sort((a, b) => {
      return b.like - a.like;
    });

    setCountries(sortedCountries);
  };

  const handleAddCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCountry: { [key: string]: FormDataEntryValue } = {};
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData) {
      newCountry[key] = value;
    }

    const updatedCountriesList = [
      ...countries,
      {
        ...newCountry,
        image: damyImage,
        like: 0,
        id: Number(countries.at(-1)?.id) + 1,
      },
    ];

    setCountries(updatedCountriesList);
    setIsCountryVisible(false)
  };

  const handleDeleteCountry = (id: string) => {
    const updatedCountriesList = countries.map((country, index) => {
      if (country.id === id) {
        return { ...country, isMarkedForDelete: true, index: index };
      }
      return country;
    });

    const countryToMove = updatedCountriesList.find(
      (country) => country.id === id
    );
    const remainingCountries = updatedCountriesList.filter(
      (country) => country.id !== id
    );

    setCountries([...remainingCountries, countryToMove!]);
  };

  const handleRestoreCountry = (id: string) => {
    const updatedCountriesList = countries.map((country) => {
      if (country.id === id && country.index !== undefined) {
        return { ...country, isMarkedForDelete: false };
      }
      return country;
    });

    const restoredCountries = updatedCountriesList.find(
      (country) => country.id === id
    );

    if (restoredCountries && restoredCountries.index !== undefined) {
      const remainingCountries = updatedCountriesList.filter(
        (country) => country.id !== id
      );
      remainingCountries.splice(restoredCountries.index, 0, restoredCountries);
      setCountries(remainingCountries);
    }
  };
  const handleCountryVisibility = () => {
    setIsCountryVisible((prev) => !prev);
  }

  return (
    <section className={classes.countries}>
      <Container>
        <div className={classes.heading}>
          <H1 heading="Countries" />

        <div className={classes['header-buttons']}>
        <Button onClick={handleCountryVisibility} title="Add country"/>
        <Button onClick={handleSortCards} title="Sort by likes"/>
       
        </div>
        </div>
        <AddCountry isPressed={isCountryVisible}  onSubmit={handleAddCountry} />
        <Row className={classes["card-row"]}>
          {countries.map((country) => (
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
               <Button onClick={() => handleDeleteCountry(country.id)} title="Delete"/>
                
                {country.isMarkedForDelete && (
                  <Button onClick={() => handleRestoreCountry(country.id)} title="Restore"/>
                   
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
