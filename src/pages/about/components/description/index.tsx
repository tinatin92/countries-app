import classes from "./index.module.css";
import { Container } from "@/components/UI/container";

const About: React.FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <section className={classes["about-section"]}>
      <Container>
        <div className={classes.container}>
          <div className={classes.description}>
            <h1>{title}</h1>
            <div>{description}</div>
          </div>
          <div className={classes.image}>
            <img src={image} alt={title} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
