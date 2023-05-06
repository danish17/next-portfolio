import { Container, Grid, Row, Text } from "@nextui-org/react";
import { EducationData } from "../../data/profile";

const EducationSection = () => {
  return (
    <Container css={{ padding: 0, margin: "$8 0" }}>
      <h3>Education</h3>
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
        {EducationData.map((edu) => {
          return (
            <Container
              as="section"
              id="education"
              key={edu.degree}
              css={{ padding: 0, margin: "$4 0" }}
            >
              <Row
                css={{
                  w: "100%",
                  flexDirection: "column",
                  "@sm": {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Text size="$lg" b>
                  {edu.degree}
                </Text>
                <Text>
                  {edu.insitution} / {`${edu.from} - ${edu.to}`}
                </Text>
              </Row>
              <Row>
                <Text b>Grade: {edu.grade}</Text>
              </Row>
              {edu.description && (
                <Container>
                  {edu.description.map((desc, idx) => (
                    <Row
                      key={idx}
                      css={{
                        "&:before": {
                          content: "→",
                          position: "absolute",
                          left: "-20px",
                          top: "2px",
                        },
                      }}
                    >
                      <Text>{desc}</Text>
                    </Row>
                  ))}
                </Container>
              )}
            </Container>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EducationSection;
