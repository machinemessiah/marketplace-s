import type { SortMode } from "../types/marketplace-types";

// @what - GitHub API sort parameter mapping
export const GITHUB_SORT_MAPPING: Record<SortMode, string> = {
  "a-z": "",
  "z-a": "",
  newest: "&sort=updated&order=desc",
  oldest: "&sort=updated&order=asc",
  stars: "&sort=stars&order=desc",
  lastUpdated: "&sort=updated&order=desc",
  mostStale: "&sort=updated&order=asc"
} as const;

// @what - Get GitHub API sort parameters for given sort mode
export function getGitHubSortParams(sortMode: SortMode): string {
  return GITHUB_SORT_MAPPING[sortMode] || "&sort=stars&order=desc";
}

// @what - Check if sort mode requires client-side sorting (GitHub API doesn't support it)
export function requiresClientSideSort(sortMode: SortMode): boolean {
  return ["a-z", "z-a"].includes(sortMode);
}
