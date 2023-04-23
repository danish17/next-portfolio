export type TImage = {
  altText: string;
  sourceUrl: string;
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
  link: string;
  uri: string;
  title: string;
  tags: {
    nodes: Array<TTag>;
  };
  featuredImage: {
    node: TImage;
  };
  date: string;
}

export interface IPosts {
  nodes: Array<IPost>;
}
