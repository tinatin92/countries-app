import { HeroSection } from "@/components/hero-section";
import { CountriesCards } from "@/components/cards-section";
import { Layout } from "@/components/layout";

import heroImage from "@/assets/japan.png";
import countrieJapan from "@/assets/japan 2.png";

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

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <HeroSection
          title={HERO_SECTION__DATA.title}
          text={HERO_SECTION__DATA.text}
          image={HERO_SECTION__DATA.image}
        />
        <CountriesCards
          title={COUNTRIES__DATA.title}
          image={COUNTRIES__DATA.image}
          capital={COUNTRIES__DATA.capital}
          population={populationFormatted}
        />
      </Layout>
    </>
  );
};

export default App;
