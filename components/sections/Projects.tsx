import { Button, Container, Grid } from "@nextui-org/react";
import ProjectCard from "../cards/Project";
import projectsData from "../../data/projects";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectsSection = () => {
  const router = useRouter();

  return (
    <Container css={{ padding: 0, margin: "$8 0" }} id="projects">
      <h3>Projects</h3>
      <Grid.Container gap={2} justify="center">
        {projectsData.slice(0, 1).map((project) => (
          <Grid xs={12} sm={9} key={project.title}>
            <ProjectCard data={project} />
          </Grid>
        ))}
      </Grid.Container>
      <Button
        flat
        css={{ marginLeft: "auto", marginRight: "auto" }}
        onClick={() => router.push("projects")}
      >
        View All
      </Button>
    </Container>
  );
};

export default ProjectsSection;
