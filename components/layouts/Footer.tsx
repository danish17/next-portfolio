import { Container, Row, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container>
      <Row justify="center">
        <Text blockquote size={10} css={{ fontFamily: "monospace" }}>
          with ❤️ from &#47;&#47;&#47;smarten.sofas.chopping
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
