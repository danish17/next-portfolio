import Head from "next/head";
import PageShell from "../components/layouts/PageShell";
import { Grid, Spacer, Text } from "@nextui-org/react";
import ProjectCard from "../components/cards/Project";
import projectsData from "../data/projects";

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
        <Text h2 size="$5xl">
          Projects
        </Text>
        <Spacer />
        <Grid.Container gap={2} justify="center">
          {projectsData.map((project) => (
            <Grid xs={12} sm={6} key={project.title}>
              <ProjectCard data={project} />
            </Grid>
          ))}
        </Grid.Container>
      </PageShell>
      ;
    </>
  );
};

export default Projects;
