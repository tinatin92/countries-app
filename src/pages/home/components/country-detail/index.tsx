import { Container } from "@/components/UI/container";
import Info from "./info";
import Image from "./image";
import classes from "./index.module.css";

interface CountryDetailProps {
  title: string;
  capital: string;
  population: string;
  image: string;
  description: string;
  like: number
}

const CountrieDetail: React.FC<CountryDetailProps> = ({
  title,
  capital,
  population,
  image,
  description,
}) => {
  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.wrapper}>
          <Image>
            <div className={classes.image}>
              <img src={image} alt={title} />
            </div>
          </Image>

          <Info>
            <h2>{title}</h2>
            <div className={classes["info-detail"]}>
              <div className={classes.title}>Capital:</div>
              <div>{capital}</div>
            </div>
            <div className={classes["info-detail"]}>
              <div className={classes.title}>Population:</div>
              <div>{population}</div>
            </div>
            <div className={classes["info-detail"]}>
              <div>{description}</div>
            </div>
          </Info>
        </div>
      </Container>
    </section>
  );
};

export default CountrieDetail;
