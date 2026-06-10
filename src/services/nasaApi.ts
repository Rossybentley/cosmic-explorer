import axios from "axios";
import type { APOD, NASAImageItem } from "../types/nasa";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

// APOD
export async function getAPOD(): Promise<APOD> {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, // 👈 fixed missing colon
  );
  return data;
}

// Mars Photos
export const getMarsPhotos = async () => {
  const { data } = await api.get(
    `/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`,
  );
  return data.photos;
};

// NASA Image Search
export const searchNASAImages = async (
  query: string,
): Promise<NASAImageItem[]> => {
  const { data } = await axios.get(
    `https://images-api.nasa.gov/search?q=${query}`,
  );
  return data.collection.items;
};
