import { useEffect, useState } from "react";
import { getAsteroids } from "../services/nasaApi";
import type { Asteroid } from "../types/asteroid";

export function useAsteroids() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAsteroids()
      .then((data) => setAsteroids(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    asteroids,
    loading,
  };
}
