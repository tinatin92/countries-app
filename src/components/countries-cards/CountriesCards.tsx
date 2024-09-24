
import classes from './CountriesCards.module.css';
import Container from '../UI/container/Container';
import countrieJapan from "../../assets/japan 2.png";

const COUNTRIES__DATA: { title: string; capital: string; population: number, image: string} = {
    image:countrieJapan,
    title: "Japan",
    capital: "Tokyo",
    population: 125100000
  }
  const populationFormatted = COUNTRIES__DATA.population.toLocaleString(); 

const CountriesCards : React.FC = () =>{
    return (
        <section className="countries">
        <Container>
          <h1>Countries</h1>
          <div className={classes['countries-row']}>

            <div className={classes['country-box']}>
              <div className={classes.image}>
                <img src={COUNTRIES__DATA.image} alt="" />
              </div>
              <div className={classes.info}>
                <h2>{COUNTRIES__DATA.title}</h2>
                <div className={classes['countrie-info']}>
                  <div className={classes['countrie-text']}>
                    <div>Capital:</div>
                    <div>{COUNTRIES__DATA.capital}</div>
                  </div>
                  <div className={classes['countrie-text']}>
                    <div>Population:</div>
                    <div>{populationFormatted}</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          </Container>
      </section>
    )
}

export default CountriesCards