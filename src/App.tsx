
import heroImage from "./assets/japan.webp";
import headerLogo from "./assets/logo.svg";
import searchIcon from "./assets/Search.svg";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import twitterIcon from "./assets/twitter.svg";
import countrieJapan from "./assets/japan 2.png";
import "./App.css";

const HERO_SECTION__DATA: { title: string; text: string } = {
  title: "Around the word",
  text: "Discover cultures, landscapes, and stories from every country.Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
};

const COUNTRIES__DATA: { title: string; capital: string; population: number, image: string} = {
  image:countrieJapan,
  title: "Japan",
  capital: "Tokyo",
  population: 125100000
}
const populationFormatted = COUNTRIES__DATA.population.toLocaleString(); 


function App() {
  return (
    <>
      <header className="container">
        <div>
          <div className="header">
            <div className="header-logo">
              <a href="#">
                <img src={headerLogo} alt="Header logo" />
              </a>
            </div>
            <div className="navigation">
              <nav>
                <a href="#">About Us</a>
                <a href="#">Countrie</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            <div className="search">
              <input type="search" placeholder="Search"/>
              <button>
                <img src={searchIcon} alt="search icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <div className="container">
          <div className="hero-section__info">
            <h1>{HERO_SECTION__DATA.title}</h1>
            <div>
              {HERO_SECTION__DATA.text}
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Country image" />
        </div>
      </section>
      <div className="share-bar">
        <div className="share">
          <a href="#">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
      <section className="countries">
        <div className="container">
          <h1>Countries</h1>
          <div className="countries-row">
            <div className="country-box">
              <div className="image">
                <img src={COUNTRIES__DATA.image} alt="" />
              </div>
              <div className="info">
                <h2>{COUNTRIES__DATA.title}</h2>
                <div className="countrie-info">
                  <div className="countrie-text">
                    <div>Capital:</div>
                    <div>{COUNTRIES__DATA.capital}</div>
                  </div>
                  <div className="countrie-text">
                    <div>Population:</div>
                    <div>{populationFormatted}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
