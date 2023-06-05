import { Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";

const WriteToMe = () => {
  return (
    <Container css={{ padding: 0, gap: 0, "@sm": { padding: 20 } }}>
      <Row>
        <Text>Write to me on:</Text>
      </Row>
      <Row>
        <Link
          href="mailto: hi@danishshakeel.me"
          style={{ wordWrap: "break-word", width: "100%" }}
        >
          <Text size="$5xl" b>
            hi@danishshakeel.me
          </Text>
        </Link>
      </Row>
    </Container>
  );
};

export default WriteToMe;
