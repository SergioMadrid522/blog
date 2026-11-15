import { ENDPOINTS } from "@/app/config/config";
import { Photo } from "@/types";
import { useCallback, useState } from "react";

export function useGetImages() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Photo[]>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(ENDPOINTS.photos, {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        setError(res.statusText);
        return;
      }

      const data = await res.json();
      if (!data) {
        throw new Error("There's no any iamges to show");
      }
      console.log(data);
      setData(data);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      console.log(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    data,
    fetchData,
  };
}
