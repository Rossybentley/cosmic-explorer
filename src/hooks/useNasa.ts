import { useEffect, useState } from "react";
import { getAPOD } from "../services/nasaApi";
import type { APOD } from "../types/nasa";

export function useAPOD() {
  const [data, setData] = useState<APOD | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAPOD()
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
}
