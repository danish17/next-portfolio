import { Container, Image, Row, Text } from "@nextui-org/react";
import Social from "../Social";

const Header = () => {
  return (
    <Container css={{ padding: 0 }}>
      <Row>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Danish Shakeel
        </Text>
      </Row>
      <Row>
        <Text b css={{ fontSize: "$xl" }}>
          Award-winning software engineer who loves to solve complex engineering
          problems and help businesses achieve their goals.
        </Text>
      </Row>
      <Row>
        <Social />
      </Row>
    </Container>
  );
};

export default Header;
