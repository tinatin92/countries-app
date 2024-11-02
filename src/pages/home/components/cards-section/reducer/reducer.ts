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
  | { type: "restore"; payload: { id: string } }
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

  if (action.type === "restore") {
    const updatedCountries = countries.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, isMarkedForDelete: false };
      }
      return country;
    });

    const restoredCountry = updatedCountries.find(
      (country) => country.id === action.payload.id,
    );

    if (restoredCountry && restoredCountry.originalIndex !== undefined) {
      const remainingCountries = updatedCountries.filter(
        (country) => country.id !== action.payload.id,
      );

      remainingCountries.splice(
        restoredCountry.originalIndex,
        0,
        restoredCountry,
      );

      return remainingCountries;
    }

    return updatedCountries;
  }

  if (action.type === "add") {
    return [...countries, action.payload];
  }

  return countries;
};
