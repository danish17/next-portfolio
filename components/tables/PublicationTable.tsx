import { Container, Link, Row, Text, useTheme } from "@nextui-org/react";
import { TArticle } from "../../types/publication";

const PublicationsList = (props: { publications: Array<TArticle> }) => {
  const { publications } = props;
  const { isDark } = useTheme();

  return (
    <>
      {publications.map((publication) => (
        <Container
          key={publication.citation_id}
          css={{ marginBottom: 20, padding: 0 }}
        >
          <Link
            href={publication.link}
            rel="noreferrer noopener"
            target="_blank"
            css={{
              color: isDark ? "white" : "$black",
              "&:hover": {
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              },
              wordBreak: "break-all",
            }}
          >
            {publication.title} | {publication.authors}
          </Link>
          <Row justify="space-between">
            {!!publication?.cited_by?.value && (
              <Text>Cited by: {publication.cited_by.value}</Text>
            )}
            <Text>Year: {publication?.year}</Text>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default PublicationsList;
