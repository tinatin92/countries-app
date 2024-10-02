import AboutDescription from "../../components/description/index";
import Image from '../../components/image/index'
import aboutImage from "@/assets/aboutpage.png";
import { Container } from "@/components/UI/container";


import classes from './index.module.css'

const ABOUT_PAGE__DATA = {
  title: "About AllGlobe",
  image: aboutImage,
  description:
    "Welcome to AllGlobe, your gateway to exploring the worlds diverse cultures, histories, and landscapes. Whether youre planning your next trip or simply curious about different nations, we provide comprehensive insights into countries from all corners of the globe. From detailed guides on geography, population, and languages to the unique traditions and must-visit attractions, AllGlobe is your trusted resource for discovering the world.",
};

const AboutView: React.FC = () => {
  return (
    <section className={classes["about-section"]}>
        <Container>
      <div className={classes.container}>
        <AboutDescription {...ABOUT_PAGE__DATA }/>
        <Image {...ABOUT_PAGE__DATA }/>

      </div>
      </Container>
    </section>
  );
};

export default AboutView;
