import Head from "next/head";
import PageShell from "../components/layouts/PageShell";
import { Row, Text } from "@nextui-org/react";

const Projects = () => {
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
        <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
          <Text h2 size="$5xl">
            Projects
          </Text>
        </Row>
      </PageShell>
      ;
    </>
  );
};

export default Projects;
