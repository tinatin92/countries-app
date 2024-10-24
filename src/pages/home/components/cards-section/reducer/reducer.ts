type Country = {
    title: string;
    capital: string;
    population: string;
    image: string;
    description: string;
    id: string;
    like: number;
    isMarkedForDelete: boolean;
    originalIndex?: number
  };
  
  type countriesType = Country[];
  
  type actionsType =
    | { type: "upLike"; payload: { id: string } }
    | { type: "sort" }
    | { type: "delete"; payload: { id: string } }
    | { type: "add"; payload: Country }
    | { type: "restore"; payload: { id: string } };
  


export const countriesReduser = (
    countries: countriesType,
    action: actionsType
  ): countriesType => {

    
    if (action.type === "upLike") {
      return countries.map((country) => {
        if (country.id === action.payload.id && !country.isMarkedForDelete) {
          return { ...country, like: country.like + 1 };
        }
        return country;
      });
    }
  
    if (action.type === "sort") {
     
      const notDeletedCountries = [...countries].filter(
        (country) => !country.isMarkedForDelete
      );
      const deletedCountries = [...countries].filter(
        (country) => country.isMarkedForDelete
      );
  
      const sortedCountries = notDeletedCountries.sort((a, b) => b.like - a.like);
  
    
      return [...sortedCountries, ...deletedCountries];
    }
  
    if (action.type === "delete") {
      const updatedCountries = countries.map((country, index) => {
        if (country.id === action.payload.id) {
          return { ...country, isMarkedForDelete: true, originalIndex: index };
        }
        return country;
      });
  
      const deletedCountries = updatedCountries.filter(
        (country) => country.isMarkedForDelete
      );
      const remainingCountries = updatedCountries.filter(
        (country) => !country.isMarkedForDelete
      );
  
      return [...remainingCountries, ...deletedCountries];
    }
  
    if (action.type === "restore") {
      const updatedCountries = countries.map((country) => {
        if (country.id === action.payload.id) {
          return { ...country, isMarkedForDelete: false };
        }
        return country;
      });
  
      const restoredCountry = updatedCountries.find(
        (country) => country.id === action.payload.id
      );
  
      if (restoredCountry && restoredCountry.originalIndex !== undefined) {
        const remainingCountries = updatedCountries.filter(
          (country) => country.id !== action.payload.id
        );
  
        remainingCountries.splice(
          restoredCountry.originalIndex,
          0,
          restoredCountry
        );
  
        return remainingCountries;
      }
  
      return updatedCountries;
    }
  
    if (action.type === "add") {
      const newCountry = action.payload;
      
      return [...countries, newCountry];
    }
  
    return countries; 
  };
  