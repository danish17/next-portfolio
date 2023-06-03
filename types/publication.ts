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
