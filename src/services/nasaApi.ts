import axios from "axios";
import type { APOD, NASAImageItem } from "../types/nasa";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

// APOD
export async function getAPOD(): Promise<APOD> {
  const { data } = await api.get(`/planetary/apod`, {
    params: { api_key: API_KEY },
  });
  return data;
}

// Mars Photos
export const getMarsPhotos = async () => {
  const { data } = await axios.get(
    `https://mars.nasa.gov/rss/api/?feed=raw_images&category=mars2020&feedtype=json&num=25&page=0`,
  );
  return data.images; // each has .image_files.medium, .sol, .caption etc.
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

// Asteroids
export const getAsteroids = async () => {
  const today = new Date().toISOString().split("T")[0];

  const { data } = await api.get(`/neo/rest/v1/feed`, {
    params: {
      start_date: today,
      end_date: today,
      api_key: API_KEY,
    },
  });

  return data.near_earth_objects[today];
};
