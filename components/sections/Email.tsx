import { Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";

const WriteToMe = () => {
  return (
    <Container>
      <Row css={{ padding: 0, "@sm": { padding: 20, marginTop: 20 } }}>
        <Text>Write to me on:</Text>
      </Row>
      <Row css={{ padding: 0, "@sm": { paddingLeft: 20, paddingRight: 20 } }}>
        <Link href="mailto: hi@danishshakeel.me">
          <Text size="$5xl" b>
            hi@danishshakeel.me
          </Text>
        </Link>
      </Row>
    </Container>
  );
};

export default WriteToMe;
