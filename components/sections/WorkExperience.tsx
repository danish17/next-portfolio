import { Container, Grid, Row, Text } from "@nextui-org/react";
import { WorkExperienceData } from "../../data/profile";
import dayjs from "dayjs";

const WorkExperienceSection = () => {
  return (
    <Container css={{ padding: 0, margin: "$8 0" }}>
      <h3>Work Experience</h3>
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
        {WorkExperienceData.map((exp) => {
          let startDateObj = dayjs(exp.from, "MM/YYYY");
          let endDateObj = dayjs();
          if (exp.to.trim() !== "") {
            endDateObj = dayjs(exp.to, "MM/YYYY");
          }

          let duration = (dayjs as any)
            .duration(endDateObj.diff(startDateObj))
            .humanize();

          return (
            <Container key={exp.title} css={{ padding: 0, margin: "$4 0" }}>
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
                  {exp.title} @ {exp.company}
                </Text>
                <Text>
                  {exp.location} / {duration}{" "}
                  {exp.to.trim() === "" && "(current)"}
                </Text>
              </Row>
              {exp.description && (
                <Container>
                  {exp.description.map((desc, idx) => (
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

export default WorkExperienceSection;
