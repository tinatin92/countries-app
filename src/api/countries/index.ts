import { httpClient } from "..";
import { CountryData } from "@/pages/home/components/cards-section/add-card";

export const getCountries = async () => {
  try {
    const response = await httpClient.get("/countries");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCountry = async (id: string) => {
  try {
    const response = await httpClient.delete(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCaontry = async (country: CountryData) => {
  try {
    const response = await httpClient.post("/countries", country);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCountry = async (country: CountryData) => {
  try {
    const response = await httpClient.put(`/countries/${country.id}`, country);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const likeCountry = async (id: number) => {
  try {
    const response = await httpClient.patch(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
