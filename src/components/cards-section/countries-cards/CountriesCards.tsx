import classes from "./CountriesCards.module.css";
import Container from "../../UI/container/Container";

import H1 from "../../h1/H1";
import Card from "../card/Card";
import CardImage from "../card-image/CardImage";
import CardInfo from "../card-info/CardInfo";
import CountryInfo from "../country-info/CountryInfo";
import InfoBody from "../country-info-body/InfoBody";
import Row from "../../UI/row/Row";

import countrieJapan from "../../../assets/japan 2.png";

const COUNTRIES__DATA: {
  title: string;
  capital: string;
  population: number;
  image: string;
} = {
  image: countrieJapan,
  title: "Japan",
  capital: "Tokyo",
  population: 125100000,
};

const populationFormatted = COUNTRIES__DATA.population.toLocaleString();

const CountriesCards: React.FC = () => {
  return (
    <section className={classes.countries}>
      <Container>
        <H1 heading="Countries" />
        <Row className={classes["card-row"]}>
          <Card>
            <CardImage image={COUNTRIES__DATA.image} />
            <CardInfo>
              <h2>{COUNTRIES__DATA.title}</h2>
              <InfoBody>
                <CountryInfo info={COUNTRIES__DATA.capital} />
                <CountryInfo info={populationFormatted} />
              </InfoBody>
            </CardInfo>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default CountriesCards;
