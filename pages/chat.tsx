import Head from "next/head";
import PageShell from "../components/layouts/PageShell";
import {
  Container,
  Input,
  Link,
  Loading,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";
import SendButton from "../components/SendButton";
import SendIcon from "../components/SendIcon";
import { useRef, useState } from "react";

const Message = () => {
  const sendButtonRef = useRef(null);
  const msgField = useRef(null);

  const [msgState, setMsgState] = useState("idle");

  const sendHandler = () => {
    let className = (sendButtonRef?.current as unknown as { className: string })
      ?.className;

    document.getElementsByClassName(className)[0]?.classList.add("is-sending");

    setMsgState("sending");
  };

  return (
    <>
      <Head>
        <title>Chat - Danish Shakeel</title>
        <meta
          name="description"
          content="Award-winning full-stack engineer who loves to solve complex software engineering problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageShell>
        <Row css={{ padding: 0, "@sm": { paddingLeft: 20, paddingRight: 20 } }}>
          <Text>For business enquiries:</Text>
        </Row>
        <Row css={{ padding: 0, "@sm": { paddingLeft: 20, paddingRight: 20 } }}>
          <Link href="mailto: hi@danishshakeel.me">
            <Text size="$5xl" b>
              hi@danishshakeel.me
            </Text>
          </Link>
        </Row>
      </PageShell>
    </>
  );
};

export default Message;
