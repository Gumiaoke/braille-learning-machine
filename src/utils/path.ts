// Base path for GitHub Pages deployment
// Empty string for local dev, "/braille-learning-machine" for production
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ap(path: string): string {
  return BASE + path;
}
