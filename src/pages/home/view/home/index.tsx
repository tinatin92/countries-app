

import Hero from "@/pages/home/components/hero-section/hero-section";
import CountriesCards from "../../components/cards-section/countries-cards/CountriesCards";

import { useParams } from "react-router-dom";
import {HERO_SECTION__DATA} from '../../static/dummy-data'




const HeroSection: React.FC = () => {
  const {lang} = useParams<{lang:string}>()


const content = lang === 'en' || lang === 'ka' ? HERO_SECTION__DATA[lang] : HERO_SECTION__DATA.ka

  if (!content) {
    return <div>Loading...</div>; 
  }

  return (
    <>
     <Hero title={content.title} text={content.text} image={content.image} />

      <CountriesCards />
    </>
  );
};

export default HeroSection;
