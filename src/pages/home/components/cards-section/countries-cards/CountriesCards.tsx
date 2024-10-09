import { useState } from "react";

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
import SortButton from "../sort-button";

import { COUNTRIES__DATA } from "@/pages/home/static/dummy-data.ts";
import { Link } from "react-router-dom";

const CountriesCards: React.FC = () => {
  const [countries, setCountries] = useState(COUNTRIES__DATA);
  const [sortCountry, setSortCountry] = useState(false)

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
    setSortCountry(prev => !prev)
   
    const sortedCountries = [...countries].sort((a, b) => {
      if(sortCountry){
        return a.like - b.like;
      }else{
        return b.like - a.like;
      }
    
    });

    setCountries(sortedCountries);
  };

  return (
    <section className={classes.countries}>
      <Container>
        <div className={classes.heading}>
          <H1 heading="Countries" />

          <SortButton onClick={handleSortCards} />
        </div>
        <Row className={classes["card-row"]}>
          {countries.map((country) => (
            <Card key={country.id}>
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
                    {country.population.toLocaleString()}
                  </CountryInfo>
                </InfoBody>

                <Link
                  className={classes.seemore}
                  to={`/countriedetail/${country.id}`}
                >
                  See more
                </Link>
              </CardInfo>
            </Card>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CountriesCards;
