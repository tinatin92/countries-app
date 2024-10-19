

import Hero from "@/pages/home/components/hero-section/hero-section";
import CountriesCards from "../../components/cards-section/countries-cards/CountriesCards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {HERO_SECTION__DATA} from '../../static/dummy-data'




const HeroSection: React.FC = () => {
  const {lang} = useParams<{lang:string}>()
  const [content, setContent] = useState<{ title: string; text: string; image: string } | null>(null);

  useEffect(() => {
    if(lang === "en" || lang === "ka"){
      setContent( HERO_SECTION__DATA[lang])
  
    }else{
      setContent( HERO_SECTION__DATA.en)
    }
  },[lang])
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
