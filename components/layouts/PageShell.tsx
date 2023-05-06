import { Container, Row } from "@nextui-org/react";
import Footer from "./Footer";
import Navigation from "./Nav";
import GoToTop from "../GoToTop";

type PageShellProps = {
  children: React.ReactNode;
};
const PageShell = (props: PageShellProps) => {
  const { children } = props;
  return (
    <>
      <Container sm justify="center" css={{ padding: 0 }}>
        <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
          <Navigation />
        </Row>
        <Container xs gap={2} justify="center">
          {children}
          <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
            <Footer />
          </Row>
        </Container>
      </Container>
      <GoToTop />
    </>
  );
};

export default PageShell;
