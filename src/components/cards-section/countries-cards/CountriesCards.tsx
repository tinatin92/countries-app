import classes from "./CountriesCards.module.css";
import { Container } from "@/components/UI/container";

import { H1 } from "@/components/h1";
import { Card } from "../card/Card";
import { CardImage } from "../image/CardImage";
import { CardInfo } from "../card-info/CardInfo";
import { CountryInfo } from "../country-info/CountryInfo";
import { InfoBody } from "../info-body/InfoBody";

import { Row } from "@/components/UI/row";

export const CountriesCards: React.FC<{
  title: string;
  image: string;
  capital: string;
  population: string;
}> = ({ title, image, capital, population }) => {
  return (
    <section className={classes.countries}>
      <Container>
        <H1 heading="Countries" />
        <Row className={classes["card-row"]}>
          <Card>
            <CardImage>
              <img src={image} alt={title} />
            </CardImage>
            <CardInfo>
              <h2>{title}</h2>
              <InfoBody>
                <CountryInfo>
                  <div>Capital:</div> {capital}
                </CountryInfo>
                <CountryInfo>
                  <div>Population:</div>
                  {population}
                </CountryInfo>
              </InfoBody>
            </CardInfo>
          </Card>
        </Row>
      </Container>
    </section>
  );
};
