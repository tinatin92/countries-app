import heroImage from "../../assets/japan.webp";
import classes from "./HeroSection.module.css";
import Container from "../UI/container/Container";
import HeroInfo from "./hero-info/HeroInfo";

const HERO_SECTION__DATA: { title: string; text: string } = {
  title: "Around the word",
  text: "Discover cultures, landscapes, and stories from every country.Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
};

const HeroSection: React.FC = () => {
  return (
    <section className={classes["hero-section"]}>
      <Container>
       <HeroInfo title={HERO_SECTION__DATA.title} text={HERO_SECTION__DATA.text} />
      </Container>
      <div className={classes['hero-image']}>
        <img src={heroImage} alt="Country image" />
      </div>
    </section>
  );
};

export default HeroSection;
