import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "xovato-recently-viewed";
const MAX = 8;

export function useRecentlyViewed(currentId?: string) {
  const [ids, setIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  // Track a view
  useEffect(() => {
    if (!currentId) return;
    setIds((prev) => {
      const next = [currentId, ...prev.filter((id) => id !== currentId)].slice(0, MAX);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, [currentId]);

  // Return ids excluding the current product
  const recentIds = currentId ? ids.filter((id) => id !== currentId) : ids;

  return recentIds;
}
