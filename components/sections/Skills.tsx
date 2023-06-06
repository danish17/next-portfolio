import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { SkillsData } from "../../data/profile";

const SkillsSection = () => {
  return (
    <Container css={{ padding: 0, margin: "$8 0" }} id="skills">
      <h3>Skills</h3>
      <Grid
        direction="column"
        alignItems="center"
        css={{
          "@sm": {
            alignItems: "flex-start",
          },
          width: "100%",
        }}
      >
        <Text size="$lg" b>
          Industry Knowledge
        </Text>
        <Container
          css={{
            borderLeft: "2px solid",
            borderColor: "rgba(0, 0, 0, 0.15)",
            marginLeft: "2px",
          }}
        >
          {SkillsData.industryKnowledge.map((skill) => (
            <Text key={skill}>{skill}</Text>
          ))}
        </Container>
        <Spacer y={1} />
        <Text size="$lg" b>
          Tools & Technologies
        </Text>
        <Container
          css={{
            borderLeft: "2px solid",
            borderColor: "rgba(0, 0, 0, 0.15)",
            marginLeft: "2px",
          }}
        >
          {SkillsData.technologies.map((skill) => (
            <Text key={skill}>{skill}</Text>
          ))}
        </Container>
        <Spacer y={1} />
        <Text size="$lg" b>
          Languages
        </Text>
        <Container
          css={{
            borderLeft: "2px solid",
            borderColor: "rgba(0, 0, 0, 0.15)",
            marginLeft: "2px",
          }}
        >
          {SkillsData.languages.map((skill) => (
            <Text key={skill}>{skill}</Text>
          ))}
        </Container>
        <Spacer y={1} />
        <Text size="$lg" b>
          Interpersonal Skills
        </Text>
        <Container
          css={{
            borderLeft: "2px solid",
            borderColor: "rgba(0, 0, 0, 0.15)",
            marginLeft: "2px",
          }}
        >
          {SkillsData.interpersonal.map((skill) => (
            <Text key={skill}>{skill}</Text>
          ))}
        </Container>
      </Grid>
    </Container>
  );
};

export default SkillsSection;
