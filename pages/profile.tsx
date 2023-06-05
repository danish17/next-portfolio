import { Grid, Image, Spacer, Text } from "@nextui-org/react";
import PageShell from "../components/layouts/PageShell";
import Head from "next/head";
import WorkExperienceSection from "../components/sections/WorkExperience";
import EducationSection from "../components/sections/Education";
import JumpToDropwdown from "../components/dropdowns/ProfileJumpTo";
import AchievementsSection from "../components/sections/Achievements";
import TestScores from "../components/sections/TestScores";
import SkillsSection from "../components/sections/Skills";
import ProjectsSection from "../components/sections/Projects";
import WriteToMe from "../components/sections/Email";

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
      <Head>
        <title>Profile - Danish Shakeel</title>
        <meta
          name="description"
          content="Award-winning full-stack engineer who loves to solve complex software engineering problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageShell>
        <Grid.Container>
          <Grid xs={12} md={6}>
            <Image
              src="./profile-360x360.jpeg"
              alt="Danish Shakeel"
              showSkeleton
              autoResize
              css={{
                borderRadius: "50%",
                maxH: "148px",
                aspectRatio: "1 / 1",
                "@sm": {
                  maxH: "198px",
                },
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
            <Text>SWE @ rtCamp | Researcher | Educator</Text>
            <Spacer />
            <JumpToDropwdown />
          </Grid>
        </Grid.Container>
        <Spacer />
        <hr style={{ height: "3px" }} />
        <WorkExperienceSection />
        <hr />
        <EducationSection />
        <hr />
        <AchievementsSection />
        <hr />
        <TestScores />
        <hr />
        <SkillsSection />
        <hr />
        <ProjectsSection />
        <hr />
        <WriteToMe />
      </PageShell>
    </>
  );
};
export default Profile;
