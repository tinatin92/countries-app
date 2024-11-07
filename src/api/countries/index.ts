import { httpClient } from "..";
import { CountryData } from "@/pages/home/components/cards-section/add-card";

/* export const getCountries = async () => {
  try {
    const response = await httpClient.get("/countries");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}; */
export interface Country {
  title: { [key: string]: string };
  capital: { [key: string]: string };
  description: { [key: string]: string };
  population: string;
  image: string;
  like: number;
  id: string;
  isMarkedForDelete: boolean;
}


export const getCountries = async (): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.get<Country[]>("/countries");
    return response.data;
  } catch (error) {
    console.log("get country error", error)
  }
};


export const deleteCountry = async (id: string): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.delete<Country[]>(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCaontry = async (country: CountryData): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.post<Country[]>("/countries", country);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCountry = async (country: CountryData): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.put<Country[]>(`/countries/${country.id}`, country);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const likeCountry = async (id: string): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.put<Country[]>(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
