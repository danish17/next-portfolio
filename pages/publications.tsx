import { Spacer, Text } from "@nextui-org/react";
import PageShell from "../components/layouts/PageShell";
import { GoogleScholarAuthorParameters, getJson } from "serpapi";
import { IPublication } from "../types/publication";
import CitationsChart from "../components/charts/CitationsChart";
import PublicationsList from "../components/tables/PublicationTable";
import CustomHead from "../components/layouts/Head";

const Publications = (props: { pubData: IPublication }) => {
  const { pubData } = props;

  return (
    <>
      <CustomHead title="Publications — Danish Shakeel" />
      <PageShell>
        <Text h2>Publications</Text>
        <Spacer />
        <CitationsChart data={pubData.cited_by} />
        <Spacer />{" "}
        <Text h5 style={{ textAlign: "center" }}>
          Citations: {pubData.cited_by?.table[0]?.citations?.all} | h-index:
          {pubData.cited_by?.table[1]?.h_index?.all}
        </Text>
        <Spacer />
        <Text h3>List of Publications</Text>
        <PublicationsList publications={pubData.articles} />
      </PageShell>
    </>
  );
};

export async function getStaticProps() {
  const params = {
    api_key: process.env.SERP_KEY,
    hl: "en",
    author_id: "QnC8JDQAAAAJ",
  } satisfies GoogleScholarAuthorParameters;

  let res = {};
  try {
    res = await getJson("google_scholar_author", params);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      pubData: res,
    },
    revalidate: 3600,
  };
}

export default Publications;
