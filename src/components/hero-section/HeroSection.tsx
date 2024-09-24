import heroImage from "../../assets/japan.webp";
import classes from "./HeroSection.module.css";
import Container from "../UI/container/Container";

const HERO_SECTION__DATA: { title: string; text: string } = {
  title: "Around the word",
  text: "Discover cultures, landscapes, and stories from every country.Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
};

const HeroSection: React.FC = () => {
  return (
    <section className={classes["hero-section"]}>
      <Container>
        <div className={classes['hero-section__info']}>
          <h1>{HERO_SECTION__DATA.title}</h1>
          <div>{HERO_SECTION__DATA.text}</div>
        </div>
      </Container>
      <div className={classes['hero-image']}>
        <img src={heroImage} alt="Country image" />
      </div>
    </section>
  );
};

export default HeroSection;
