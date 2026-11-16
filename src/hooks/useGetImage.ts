import { ENDPOINTS } from "@/app/config/config";
import type { Photo } from "@/types";
import { useCallback, useState } from "react";

export function useGetImage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Photo | null>(null);

  const fetchData = useCallback(async (slug: string) => {
    try {
      setLoading(true);
      setError(null);
      setData(null);

      const res = await fetch(
        `${ENDPOINTS.photo}/${encodeURIComponent(slug)}`,
        {
          method: "GET",
          cache: "no-store",
        },
      );

      if (!res.ok) {
        throw new Error(
          res.status === 404 ? "Photo not found" : res.statusText,
        );
      }

      const response: Photo = await res.json();

      setData(response);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";

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
