import { Grid, Image, Spacer, Text } from "@nextui-org/react";
import PageShell from "../components/layouts/PageShell";
import WorkExperienceSection from "../components/sections/WorkExperience";
import EducationSection from "../components/sections/Education";
import JumpToDropwdown from "../components/dropdowns/ProfileJumpTo";
import AchievementsSection from "../components/sections/Achievements";
import TestScores from "../components/sections/TestScores";
import SkillsSection from "../components/sections/Skills";
import ProjectsSection from "../components/sections/Projects";
import WriteToMe from "../components/sections/Email";
import CustomHead from "../components/layouts/Head";

var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
var relativeTime = require("dayjs/plugin/relativeTime");
var duration = require("dayjs/plugin/duration");
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);

const Profile = () => {
  return (
    <>
      <CustomHead title="Profile — Danish Shakeel" />
      <PageShell>
        <Grid.Container>
          <Grid xs={12} md={6} alignItems="center">
            <Image
              src="/profile-360x360.webp"
              alt="Danish Shakeel"
              showSkeleton
              autoResize
              width={198}
              height={198}
              css={{
                borderRadius: "50%",
                maxH: "198px",
                aspectRatio: "1 / 1",
              }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            direction="column"
            alignItems="center"
            css={{
              "@sm": {
                alignItems: "flex-start",
              },
            }}
          >
            <Text
              h2
              css={{ textAlign: "center", "@sm": { textAlign: "left" } }}
            >
              Danish Shakeel
            </Text>
            <Text>Software Engineer @ rtCamp | Researcher | Educator</Text>
            <Spacer />
            <JumpToDropwdown />
          </Grid>
        </Grid.Container>
        <Spacer y={2} />
        <hr style={{ height: "2px" }} />
        <Spacer y={1} />
        <WorkExperienceSection />
        <hr />
        <EducationSection />
        <hr />
        <AchievementsSection />
        <hr />
        <TestScores />
        <hr />
        <SkillsSection />
        <Spacer y={2} />
        <hr />
        <Spacer y={1} />
        <ProjectsSection />
        <Spacer y={2} />
        <hr />
        <Spacer y={1} />
        <WriteToMe />
      </PageShell>
    </>
  );
};
export default Profile;
