import { Card, Col, Loading, Row, Button } from "@nextui-org/react";

export const PostSkeleton = () => {
  return (
    <Row
      css={{
        padding: 0,
        paddingRight: 0,
        "@sm": { paddingLeft: 20, paddingRight: 20 },
      }}
    >
      <Card css={{ w: "100%", h: "400px", marginBottom: "20px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Loading type="points" size="sm" />
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Loading
            type="points"
            size="sm"
            css={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Card.Body>
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
          <Row>
            <Col>
              <Row>
                <Col>
                  <Loading type="points" size="sm" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Loading type="points" size="sm" />
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Row>
  );
};
