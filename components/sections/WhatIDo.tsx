import { Container, Text } from "@nextui-org/react";

const WhatIDo = () => {
  return (
    <>
      <Container css={{ padding: 0, gap: 0, "@sm": { padding: 20 } }}>
        <Text
          h1
          as="p"
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            margin: 0,
          }}
          weight="bold"
        >
          Give your business
        </Text>
        <Text
          h1
          as="p"
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            margin: 0,
          }}
          weight="bold"
        >
          the Digital Boost
        </Text>
        <Text
          h1
          as="p"
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            margin: 0,
          }}
          weight="bold"
        >
          it deserves.
        </Text>
        <Text h3 as="p">
          I can help you take your business to new digital heights with
          enterprise-grade solutions specially crafted for your needs.
        </Text>
      </Container>
    </>
  );
};

export default WhatIDo;
