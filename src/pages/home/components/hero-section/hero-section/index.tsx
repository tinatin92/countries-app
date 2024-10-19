import { Container } from "@/components/UI/container";
import { HeroInfo } from "@/components/hero-section";

import classes from "./index.module.css";



const HeroSection: React.FC<{ title: string; text: string; image: string }> = ({
  title,
  image,
  text,
}) => {
  return (
    <section className={classes["hero-section"]}>
      
      <Container>
        <HeroInfo>
          <h1>{title}</h1>
          <div>{text}</div>
        </HeroInfo>
      </Container>
      <div className={classes["hero-image"]}>
        <img src={image} alt='hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
