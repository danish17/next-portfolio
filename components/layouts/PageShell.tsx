import { Container, Row } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Nav";

type PageShellProps = {
  children: React.ReactNode;
};
const PageShell = (props: PageShellProps) => {
  const { children } = props;
  return (
    <>
      <Row css={{ paddingTop: 20 }}>
        <Navigation />
      </Row>
      <Container xs gap={2} justify="center">
        <Row css={{ paddingTop: 20 }}>
          <Header />
        </Row>
        <hr />
        {children}
        <Row css={{ paddingTop: 20 }}>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default PageShell;
