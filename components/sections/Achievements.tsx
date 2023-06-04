import { Container, Grid, Row, Text } from "@nextui-org/react";
import { AchievementsData } from "../../data/profile";

const AchievementsSection = () => {
  return (
    <Container css={{ padding: 0, margin: "$8 0" }} id="achievements">
      <h3>Achievements & Awards</h3>
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
        {AchievementsData.map((achievement) => {
          return (
            <Container
              as="section"
              key={achievement.title}
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
                  {achievement.title}
                </Text>
                <Text>{`${achievement.org}, ${achievement.year}`}</Text>
              </Row>
              <Text>{achievement.description}</Text>
            </Container>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AchievementsSection;
