import { Button, Container, Grid } from "@nextui-org/react";
import ProjectCard from "../cards/Project";
import projectsData from "../../data/projects";
import Link from "next/link";

const ProjectsSection = () => {
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
      <Link href="/projects">
        <Button flat css={{ marginLeft: "auto", marginRight: "auto" }}>
          View All
        </Button>
      </Link>
    </Container>
  );
};

export default ProjectsSection;
