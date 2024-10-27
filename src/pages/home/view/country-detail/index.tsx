import CountrieDetail from "../../components/country-detail";
import { useParams } from "react-router-dom";
import { COUNTRIES__DATA } from "../../static/dummy-data.ts";

const CountrieDetailPage: React.FC = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();

  // Find the country by ID
  const countryInfo = COUNTRIES__DATA.find((country) => country.id === id);

  if (!countryInfo) {
    return <p>Country not found!</p>;
  }

  // Set default language to English if none is provided
  const language = lang === "en" || lang === "ka" ? lang : "en";

  return (
    <CountrieDetail
      title={countryInfo.title[language]} // Use translated title
      capital={countryInfo.capital[language]} // Use translated capital
      description={countryInfo.description[language]} // Use translated description
      population={countryInfo.population}
      image={countryInfo.image}
      like={countryInfo.like}
    />
  );
};

export default CountrieDetailPage;
