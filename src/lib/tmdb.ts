const TMDB_BASE_URL = process.env.TMDB_BASE_URL!;
const TMDB_TOKEN = process.env.TMDB_API_TOKEN!;

export async function tmdbFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${TMDB_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status}`);
  }

  return res.json();
}
