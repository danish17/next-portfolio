import type { IPublication } from "./types";

const AUTHOR_ID = "QnC8JDQAAAAJ";

export async function fetchPublications(): Promise<IPublication | null> {
  try {
    const url = new URL("https://serpapi.com/search");
    url.searchParams.set("engine", "google_scholar_author");
    url.searchParams.set("author_id", AUTHOR_ID);
    url.searchParams.set("hl", "en");
    url.searchParams.set("api_key", process.env.SERP_KEY!);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Scholar fetch failed: ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as IPublication;
  } catch (error) {
    console.error("Failed to fetch Google Scholar data:", error);
    return null;
  }
}
