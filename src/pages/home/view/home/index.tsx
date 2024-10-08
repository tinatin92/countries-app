// import Hero from "@/pages/home/components/hero-section/hero-section";

import Hero from "@/pages/home/components/hero-section/hero-section";
import CountriesCards from "../../components/cards-section/countries-cards/CountriesCards";

import {
  // COUNTRIES__DATA,
  HERO_SECTION__DATA,
} from "../../static/dummy-data.ts";

const HeroSection: React.FC = () => {
  return (
    <>
      <Hero {...HERO_SECTION__DATA} />

      <CountriesCards /* countries={COUNTRIES__DATA} *//>
    </>
  );
};

export default HeroSection;
