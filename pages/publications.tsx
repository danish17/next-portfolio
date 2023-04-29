import { Text } from "@nextui-org/react";
import PageShell from "../components/layouts/PageShell";
import Head from "next/head";
import { GoogleScholarAuthorParameters, getJson } from "serpapi";

const Publications = () => {
  return (
    <>
      <Head>
        <title>Danish Shakeel</title>
        <meta
          name="description"
          content="Award-winning full-stack engineer who loves to solve complex software engineering problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageShell>
        <Text h2>Publications</Text>
      </PageShell>
    </>
  );
};

export async function getServerSideProps() {
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
  };
}

export default Publications;
