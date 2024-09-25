import Header from "./components/header/header";
import HeroSection from "./components/hero-section/HeroSection";
import ShareBar from "./components/share-bar/ShareBar";
import CountriesCards from "./components/cards-section/countries-cards/CountriesCards";



const App :React.FC = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <ShareBar />
    <CountriesCards />
  </>
  )
}



export default App;
