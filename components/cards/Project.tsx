import { Button, Card, Col, Link, Row, Text } from "@nextui-org/react";
import { ReactNode } from "react";
import { BsGithub, BsLink } from "react-icons/bs";

type PropType = {
  title: string;
  desc: string;
  github: string;
  deployed: string;
  image: string;
  tech: Array<ReactNode>;
  hideFooter?: boolean;
};
const ProjectCard = (props: { data: PropType }) => {
  const { data } = props;

  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h3 color="white">
            {data.title}
          </Text>
          <Text h5 color="white">
            {data.desc}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={data.image}
        objectFit="cover"
        width="100%"
        height={340}
        css={{
          filter: "blur(2.5px) brightness(0.35)",
        }}
        alt={data.title}
      />
      {!data.hideFooter && (
        <Card.Footer
          css={{
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          <Row css={{ width: "fit-content" }}>
            {data.tech.map((tech, idx) => (
              <Col key={idx} css={{ marginRight: "8px" }}>
                {tech}
              </Col>
            ))}
          </Row>
          <Row justify="flex-end">
            {!!data.github && (
              <Link
                href={data.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button auto icon={<BsGithub />} color="secondary" />
              </Link>
            )}
            {!!data.deployed && (
              <Link
                href={data.deployed}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  auto
                  icon={<BsLink />}
                  color="default"
                  css={{ marginLeft: "$2" }}
                />
              </Link>
            )}
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ProjectCard;
