import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const WhoAmI = () => {
  const router = useRouter();
  return (
    <>
      <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
        <Text h2>Who Am I</Text>
      </Row>
      <Row
        css={{
          padding: 0,
          "@sm": { padding: 20 },
        }}
      >
        <Card role="article">
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
                Saarbrücken, Germany; currently building @Suprvise and working as an Growth Engineer @rtCamp.
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="/profile-alt.webp"
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
                bordered
                auto
                rounded
                color="warning"
                onClick={() => {
                  router.push("profile");
                }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  View Profile
                </Text>
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default WhoAmI;
