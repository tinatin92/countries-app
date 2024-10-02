// import Hero from "@/pages/home/components/hero-section/hero-section";

import countrieJapan from "@/assets/japan 2.png";
import heroImage from "@/assets/japan.png";

// import { CountriesCards } from "@/pages/home/components/cards-section/countries-cards/CountriesCards";
import { lazy } from "react";

const LazyHeroSection = lazy(
  () => import("@/pages/home/components/hero-section/hero-section")
);
const LazyCountriesSection = lazy(
  () => import("@/pages/home/components/cards-section/countries-cards/CountriesCards")
)




const HERO_SECTION__DATA: { title: string; text: string; image: string } = {
  title: "Around the word",
  text: "Discover cultures, landscapes, and stories from every country.Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
  image: heroImage,
};

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

const HeroSection: React.FC = () => {
  return (
    <>
      <LazyHeroSection {...HERO_SECTION__DATA} />
      <LazyCountriesSection
        title={COUNTRIES__DATA.title}
        capital={COUNTRIES__DATA.capital}
        population={populationFormatted}
        image={COUNTRIES__DATA.image}
      />
    </>
  );
};

export default HeroSection;
