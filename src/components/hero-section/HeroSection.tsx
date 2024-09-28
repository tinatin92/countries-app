
import classes from "./HeroSection.module.css";
import Container from "../UI/container/Container";
import HeroInfo from "./hero-info/HeroInfo";
import ShareBar from "../share-bar/ShareBar";



const HeroSection: React.FC<{title:string,text:string,image:string}> = ({title,text,image}) => {
  return (
    <section className={classes["hero-section"]}>
      <ShareBar />
      <Container>
        <HeroInfo>
          <h1>{title}</h1>
          <div>{text}</div>
        </HeroInfo>
      </Container>
      <div className={classes["hero-image"]}>
        <img src={image} alt="Country image" />
      </div>
    </section>
  );
};

export default HeroSection;
