import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CountrieDetail from "../../components/country-detail";
import { getCountryDetail } from "@/api/countries";
import { Country } from "../../components/cards-section/countries-cards/CountriesCards";

const CountrieDetailPage: React.FC = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();


  const { data: countryDetail, isLoading, isError } = useQuery<Country | undefined>({
    queryKey: ["country-detail", id],
    queryFn: () => getCountryDetail(id!),
    enabled: !!id, 
  });

  if (isLoading) {
    return <p>Loading country details...</p>;
  }

  if (isError || !countryDetail) {
    return <p>Country not found or error loading details.</p>;  
  }

  const language = lang === "en" || lang === "ka" ? lang : "en";

  return (
    <CountrieDetail
      title={countryDetail.title[language]}
      capital={countryDetail.capital[language]}
      description={countryDetail.description[language]}
      population={countryDetail.population}
      image={countryDetail.image}
      like={countryDetail.like}
    />
  );
};

export default CountrieDetailPage;
