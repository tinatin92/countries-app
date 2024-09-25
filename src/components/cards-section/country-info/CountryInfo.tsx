import classes from './CountryInfo.module.css'

const CountryInfo:React.FC<{info : string}> = ({info}) => {
   return (
    <div className={classes["countrie-text"]}>
                  <div>Capital:</div>
                  <div>{info}</div>
                </div>
   )
}

export default CountryInfo