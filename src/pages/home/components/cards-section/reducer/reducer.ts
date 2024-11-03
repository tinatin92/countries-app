export type Country = {
  title: { [key: string]: string };
  capital: { [key: string]: string };
  population: string;
  image: string;
  description: { [key: string]: string };
  id: string;
  like: number;
  originalIndex?: number;
  isMarkedForDelete: boolean;
};

export type countriesType = Country[];

type actionsType =
  | { type: "upLike"; payload: { id: string } }
  | { type: "sort" }
  | { type: "delete"; payload: { id: string } }
  | { type: "add"; payload: Country }
  | { type: "update"; payload: Country } 
  | { type: "setInitialData"; payload: Country[] };

export const countriesReducer = (
  countries: countriesType,
  action: actionsType,
): countriesType => {
  if (action.type === "setInitialData") {
    return action.payload;
  }

  if (action.type === "upLike") {
    return countries.map((country) => {
      if (country.id === action.payload.id && !country.isMarkedForDelete) {
        return { ...country, like: country.like + 1 };
      }
      return country;
    });
  }

  if (action.type === "sort") {
    const notDeletedCountries = countries.filter(
      (country) => !country.isMarkedForDelete,
    );
    const deletedCountries = countries.filter(
      (country) => country.isMarkedForDelete,
    );

    const sortedCountries = notDeletedCountries.sort((a, b) => b.like - a.like);
    return [...sortedCountries, ...deletedCountries];
  }

  if (action.type === "delete") {
    return countries.filter((country) => country.id !== action.payload.id);
  }

  if (action.type === "update") {
    return countries.map((country) => {
      // Check if the current country matches the ID from the payload
      if (country.id === action.payload.id) {
        // Return the updated country data
        return { ...action.payload, isMarkedForDelete: false };
      }
      // Return the country unchanged if it doesn't match
      return country;
    });
  }

  if (action.type === "add") {
    return [...countries, action.payload];
  }

  return countries;
};
