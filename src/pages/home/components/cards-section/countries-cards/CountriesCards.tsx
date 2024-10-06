// CountriesCards.tsx

import classes from "./CountriesCards.module.css";
import { Container } from "@/components/UI/container";
import { H1 } from "@/components/h1";
import { Card } from "../card/Card";
import { CardImage } from "../image/CardImage";
import { CardInfo } from "../card-info/CardInfo";
import { CountryInfo } from "../country-info/CountryInfo";
import { InfoBody } from "../info-body/InfoBody";
import { Row } from "@/components/UI/row";




interface CountryData {
  title: string;
  image: string;
  capital: string;
  population: string;
  id: string;
}

const CountriesCards: React.FC<{ countries: CountryData[] }> = ({
  countries,
}) => {
  return (
    <section className={classes.countries}>
      <Container>
        <H1 heading="Countries" />
        <Row className={classes["card-row"]}>
          {countries.map((country) => (
        
              <Card id={country.id} key={country.id}>
                <CardImage>
                  <img src={country.image} alt={country.title} />
                </CardImage>
                <CardInfo>
                  <h2>{country.title}</h2>
                  <InfoBody>
                    <CountryInfo>
                      <div>Capital:</div> {country.capital}
                    </CountryInfo>
                    <CountryInfo>
                      <div>Population:</div>
                      {country.population.toLocaleString()}
                    </CountryInfo>
                  </InfoBody>
                </CardInfo>
              </Card>
         
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CountriesCards;
