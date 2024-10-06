import CountrieDetail from "../../components/country-detail";
import { useParams } from "react-router-dom";
import { COUNTRIES__DATA } from "../../static/dummy-data.ts";

const CountrieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const countryInfo = COUNTRIES__DATA .find((country) => country.id === id);

  if (!countryInfo) {
    return <p>Country not found!</p>; 
  }

    return <CountrieDetail {...countryInfo} />;
};

export default CountrieDetailPage;
