import {
  Container,
  Dropdown,
  Grid,
  Image,
  Spacer,
  Text,
} from "@nextui-org/react";
import PageShell from "../components/layouts/PageShell";
import { MdWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import Head from "next/head";

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
              src="./profile.jpeg"
              alt="Danish Shakeel"
              showSkeleton
              autoResize
              css={{ borderRadius: "50%", maxH: "198px" }}
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
            <Dropdown>
              <Dropdown.Button flat>Download CV</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Section title="Download CV">
                  <Dropdown.Item key="new" icon={<IoMdSchool />}>
                    Academia
                  </Dropdown.Item>
                  <Dropdown.Item key="copy" icon={<MdWork />}>
                    Industry
                  </Dropdown.Item>
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
        <Spacer />
        <hr />
        <Spacer />
        <Container css={{ padding: 0 }}>
          <h3>Work Experience</h3>
        </Container>
      </PageShell>
    </>
  );
};
export default Profile;
