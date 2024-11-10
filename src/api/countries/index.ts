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


/* export const getCountries = async (): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.get<Country[]>("/countries");
    return response.data;
  } catch (error) {
    console.log("get country error", error)
  }
}; */


export const getCountries = async (sortOrder: string = ""): Promise<Country[]> => {
  try {
    // Make the API request with the dynamic _sort parameter
    const response = await httpClient.get<Country[]>(
      `/countries?_sort=likes&_order=${sortOrder}`  // Add the sort query to the request
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    throw new Error("Failed to fetch countries data.");
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



export const getCountryDetail = async (id: string): Promise<Country | undefined> => {
  try {
    const response = await httpClient.get<Country>(`countries/${id}`);
    if (!response.data) {
      return undefined; 
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching country detail:", error);
    throw error;
  }
};


 
/* useEffect(() => {
  axios
    .get(`http://localhost:3000/countries/${id}`)
    .then((response) => {
      setCountryDetail(response.data);
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
}, [id]); */

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

/* export const likeCountry = async (id: string): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.put<Country[]>(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
 */



export const likeCountry = async (id: string): Promise<Country | undefined> => {
  try {

    const response = await httpClient.get<Country>(`/countries/${id}`);
    const currentCountry = response.data;

    const updatedCountry = {
      ...currentCountry,
      like: currentCountry.like + 1,
    };

   
    const updateResponse = await httpClient.put<Country>(`/countries/${id}`, updatedCountry);
    return updateResponse.data;
  } catch (error) {
    console.error("Failed to like country:", error);
  }
};


/* export const getSortedCountries = async (sortOrder: string): Promise<Country[] | undefined> => {
  try {
    const response = await httpClient.get<Country[]>("/countries");


    const sortedCountries = response.data.sort((a, b) => {
      return sortOrder === "asc" ? a.like - b.like : b.like - a.like;
    });

    return sortedCountries;
  } catch (error) {
    console.log("Error fetching sorted countries:", error);
  }
}; */

export const getSortedCountries = async (
  sortOrder: string = "desc" // Default to 'desc' if not passed
): Promise<Country[]> => {
  try {
    // Make the API request with dynamic _sort and _order query parameters
    const response = await httpClient.get<Country[]>(
      `/countries?_sort=likes&_order=${sortOrder}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    throw new Error("Failed to fetch countries data.");
  }
};


 