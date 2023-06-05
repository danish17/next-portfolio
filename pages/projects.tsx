import Head from "next/head";
import PageShell from "../components/layouts/PageShell";
import { Grid, Spacer, Text } from "@nextui-org/react";
import ProjectCard from "../components/cards/Project";
import projectsData from "../data/projects";
import CustomHead from "../components/layouts/Head";

const Projects = () => {
  return (
    <>
      <CustomHead title="Projects — Danish Shakeel" />
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
    </>
  );
};

export default Projects;
