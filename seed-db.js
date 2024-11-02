import fs from 'fs';
import axios from 'axios';

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;

   
    const processedCountries = countries.map(country => ({
      title: {
        en: country.name.common,
        ka: '', 
      },
      capital: {
        en: country.capital ? country.capital[0] : '',
        ka: '', 
      },
      description: {
        en: country.name.official,
        ka: '', 
      },
      population: country.population,
      image: country.flags.png,
      like: 0,
      id: country.cca3,
    }));

    
    fs.writeFileSync('database.json', JSON.stringify({ countries: processedCountries }, null, 2));
    console.log('Countries successfully written to database.json');
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

fetchCountries();
