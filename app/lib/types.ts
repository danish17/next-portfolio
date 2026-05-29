export type TImage = {
  altText: string;
  sourceUrl: string;
  mediaItemUrl: string;
  small?: string;
};

export type TAuthor = {
  node: {
    avatar: {
      url: string;
    };
    firstName: string;
    lastName: string;
    url: string | null;
  };
};

export type TCategory = {
  node: {
    name: string;
    link: string;
  };
};

export type TTag = {
  name: string;
  link: string;
};

export interface IPost {
  author: TAuthor;
  categories: {
    edges: Array<TCategory>;
  };
  excerpt: string;
  content: string;
  link: string;
  uri: string;
  title: string;
  tags: {
    nodes: Array<TTag>;
  };
  featuredImage: {
    node: TImage;
  } | null;
  date: string;
}

export interface IPosts {
  nodes: Array<IPost>;
}

export interface GetRecentPostsResponse {
  posts: IPosts;
}

// ─── Projects CPT ────────────────────────────────────────────────────────────────

export interface IProject {
  title: string;
  excerpt: string;
  content: string;
  projectUrl?: { projectLink: string } | null;
  featuredImage: {
    node: TImage;
  } | null;
  categories: {
    edges: Array<TCategory>;
  };
  tags: {
    nodes: Array<TTag>;
  };
  link: string;
  date: string;
}

export interface IProjects {
  nodes: Array<IProject>;
}

export interface GetProjectsResponse {
  projects: IProjects;
}

// ─── Talks CPT ────────────────────────────────────────────────────────────────────

export interface ITalk {
  title: string;
  content: string;
  eventDetails?: { eventDetails: string } | null;
  featuredImage: {
    node: TImage;
  } | null;
  link: string;
  date: string;
}

export interface ITalks {
  nodes: Array<ITalk>;
}

export interface GetTalksResponse {
  talks: ITalks;
}

// ─── Google Scholar ─────────────────────────────────────────────────────────────

export interface IPublication {
  cited_by: TCitedBy;
  articles: Array<TArticle>;
}

export type TCitedBy = {
  graph: {
    year: string | number;
    citations: string | number;
  }[];
  table: [
    {
      citations: {
        all: string | number;
      };
    },
    {
      h_index: {
        all: string | number;
      };
    }
  ];
};

export type TArticle = {
  citation_id: string;
  title: string;
  cited_by: { value: number | string };
  link: string;
  authors: string;
  year: number | string;
};
