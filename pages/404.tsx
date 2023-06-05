import { Button, Container, Spacer, Text } from "@nextui-org/react";
import CustomHead from "../components/layouts/Head";
import PageShell from "../components/layouts/PageShell";
import Image from "next/image";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();
  return (
    <>
      <CustomHead title="4-oh-4 — Danish Shakeel " />
      <PageShell>
        <Container
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 18,
          }}
        >
          <Image alt="" src="/404.svg" width={245} height={104} />
          <Text h4 css={{ textAlign: "center" }}>
            Being lost is worth the &apos;being found&apos;.
          </Text>
          <Button
            flat
            color="success"
            onClick={() => {
              router.push("/");
            }}
          >
            Take Me Home
          </Button>
        </Container>
      </PageShell>
    </>
  );
};

export default Page404;
