import type { GetRecentPostsResponse, GetProjectsResponse, GetTalksResponse } from "./types";

const GRAPHQL_ENDPOINT = "https://danishshakeel.me/graphql";

const GET_RECENT_POSTS_QUERY = `
  query GetRecentPosts {
    posts(first: 3) {
      nodes {
        author {
          node {
            avatar {
              url
            }
            firstName
            lastName
            url
          }
        }
        categories(first: 1) {
          edges {
            node {
              name
              link
            }
          }
        }
        excerpt(format: RENDERED)
        content(format: RENDERED)
        link
        uri
        title(format: RENDERED)
        tags(first: 104) {
          nodes {
            name
            link
          }
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            small: sourceUrl(size: THUMBNAIL)
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
        date
      }
    }
  }
`;

export async function fetchRecentPosts(): Promise<GetRecentPostsResponse | null> {
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_RECENT_POSTS_QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", JSON.stringify(json.errors));
      return null;
    }

    return json.data as GetRecentPostsResponse;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return null;
  }
}

const GET_PROJECTS_QUERY = `
  query GetProjects {
    projects(first: 100) {
      nodes {
        title(format: RENDERED)
        excerpt(format: RENDERED)
        content(format: RENDERED)
        projectUrl {
          projectLink
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            small: sourceUrl(size: THUMBNAIL)
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
        categories(first: 10) {
          edges {
            node {
              name
              link
            }
          }
        }
        link
        date
      }
    }
  }
`;

export async function fetchProjects(): Promise<GetProjectsResponse | null> {
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_PROJECTS_QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Projects fetch failed: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", JSON.stringify(json.errors));
      return null;
    }

    return json.data as GetProjectsResponse;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return null;
  }
}

const GET_TALKS_QUERY = `
  query GetTalks {
    talks(first: 100) {
      nodes {
        title(format: RENDERED)
        content(format: RENDERED)
        eventDetails {
          eventDetails
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            small: sourceUrl(size: THUMBNAIL)
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
        link
        date
      }
    }
  }
`;

export async function fetchTalks(): Promise<GetTalksResponse | null> {
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_TALKS_QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Talks fetch failed: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", JSON.stringify(json.errors));
      return null;
    }

    return json.data as GetTalksResponse;
  } catch (error) {
    console.error("Failed to fetch talks:", error);
    return null;
  }
}
