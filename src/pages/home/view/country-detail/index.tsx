import { useEffect, useState } from "react";
import CountrieDetail from "../../components/country-detail";
import { useParams } from "react-router-dom";
import axios from "axios";
import {CountryData} from '../../components/cards-section/add-card/index'


const CountrieDetailPage: React.FC = () => {
  const [countryDetail, setCountryDetail] = useState<CountryData | null>(null);
  const { id, lang } = useParams<{ id: string; lang: string }>();

  useEffect(() => {
   
    axios.get(`http://localhost:3000/countries/${id}`)
      .then((response) => {
        setCountryDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [id]); 


  if (!countryDetail) {
    return <p>Loading country details...</p>; 
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
