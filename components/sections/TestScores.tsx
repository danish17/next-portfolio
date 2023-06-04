import { Container, Grid, Row, Text } from "@nextui-org/react";
import { TestScoresData } from "../../data/profile";

const TestScores = () => {
  return (
    <Container css={{ padding: 0, margin: "$8 0" }} id="scores">
      <h3>Test Scores</h3>
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
        {TestScoresData.map((test) => {
          return (
            <Container
              as="section"
              key={test.title}
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
                  {test.title}
                </Text>
                <Text>{`Score: ${test.score} • ${test.year}`}</Text>
              </Row>
              <Text>{test.description}</Text>
            </Container>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TestScores;
