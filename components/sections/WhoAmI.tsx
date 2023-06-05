import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import Link from "next/link";

const WhoAmI = () => {
  return (
    <>
      <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
        <Text h2>Who Am I</Text>
      </Row>
      <Row
        css={{
          padding: 0,
          "@sm": { paddingLeft: 20, paddingRight: 20 },
        }}
      >
        <Card>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={16}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                Hi, I am Danish 👋
              </Text>
              <Text h3 color="white">
                I am a full-stack developer, educator, and researcher based in
                Kashmir, India; currently working as an SWE @ rtCamp.
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="./profile-alt.jpeg"
            objectFit="cover"
            width="100%"
            height={400}
            alt="Danish Shakeel - Profile"
            css={{
              filter: "brightness(50%) blur(2px)",
            }}
          />
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row css={{ gap: 4 }}>
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Contact Me
                </Text>
              </Button>
              <Link href="/profile">
                <Button bordered auto rounded color="warning">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    View Profile
                  </Text>
                </Button>
              </Link>
            </Row>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default WhoAmI;
