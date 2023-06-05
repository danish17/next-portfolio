import { Button, Card, Col, Loading, Row, Text } from "@nextui-org/react";
import moment from "moment";
import Link from "next/link";
import { IPost } from "../../types/post";

const Post = (props: { postData: IPost }) => {
  const { postData } = props;

  const fromNow = (date: string) => {
    const dateObj = new Date(date);
    return moment(dateObj.toLocaleDateString(), "DD/MM/YYYY").fromNow();
  };

  return (
    <Card role="article" css={{ w: "100%", h: "400px", marginBottom: "20px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {postData?.categories?.edges[0]?.node?.name}
          </Text>
          <Link
            href={postData?.link ?? "https://danishshakeel.me"}
            target="_blank"
          >
            <Text
              h3
              color="white"
              css={{
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                },
              }}
            >
              {postData.title}
            </Text>
          </Link>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={`${postData.featuredImage.node.sourceUrl}.webp`}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={postData.featuredImage.node.altText}
          css={{ filter: "brightness(50%)" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col
                span={3}
                css={{ display: "none", "@sm": { display: "block" } }}
              >
                <Card.Image
                  showSkeleton
                  autoResize
                  src={postData.author.node.avatar.url}
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12} b>
                  {postData.author.node?.firstName}{" "}
                  {postData.author.node?.lastName}
                </Text>
                <Text color="#d1d1d1" size={12}>
                  {fromNow(postData?.date)}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link
                href={postData?.link ?? "https://danishshakeel.me"}
                target="_blank"
                aria-label="Read full post"
              >
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Read Full Post
                  </Text>
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Post;
