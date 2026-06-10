import { useState } from "react";
import { searchNASAImages } from "../services/nasaApi";
import type { NASAImageItem } from "../types/nasa";

export function useSearchNASA() {
  const [results, setResults] = useState<NASAImageItem[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    const data = await searchNASAImages(query);
    setResults(data);
    setLoading(false);
  };

  return { results, loading, search };
}
