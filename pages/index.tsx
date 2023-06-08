import PageShell from "../components/layouts/PageShell";
import { Row, Spacer, Text } from "@nextui-org/react";
import Header from "../components/layouts/Header";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { IPosts } from "../types/post";
import dynamic from "next/dynamic";
import { PostSkeleton } from "../components/layouts/Skeleton";
import WhoAmI from "../components/sections/WhoAmI";
import WriteToMe from "../components/sections/Email";
import WhatIDo from "../components/sections/WhatIDo";
import CustomHead from "../components/layouts/Head";

const Post = dynamic(() => import("../components/cards/Post"), {
  ssr: false,
  loading: () => <PostSkeleton />,
});

const Home = (props: { posts: IPosts }) => {
  const { posts } = props;
  return (
    <>
      <CustomHead
        title="Danish Shakeel — Software Engineer, Educator, and Researcher based in
      Kashmir."
      />
      <PageShell>
        <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
          <Header />
        </Row>
        <Spacer y={1} />
        <hr />
        <Spacer y={1} />
        <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
          <Text h2>Blog</Text>
        </Row>
        {posts.nodes?.map((post) => (
          <Row
            css={{
              padding: 0,
              paddingRight: 0,
              "@sm": { paddingLeft: 20, paddingRight: 20 },
            }}
            key={post.date}
          >
            <Post postData={post} />
          </Row>
        ))}
        <Spacer y={1} />
        <hr />
        <Spacer y={1} />
        <WhoAmI />
        <Spacer y={2} />
        <hr />
        <Spacer y={1} />
        <WhatIDo />
        <WriteToMe />
      </PageShell>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetRecentPosts {
        posts(first: 3) {
          nodes {
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
                url
              }
            }
            categories(first: 1) {
              edges {
                node {
                  name
                  link
                }
              }
            }
            excerpt(format: RENDERED)
            link
            uri
            title(format: RENDERED)
            tags(first: 104) {
              nodes {
                name
                link
              }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
                small: sourceUrl(size: THUMBNAIL)
                sourceUrl(size: MEDIUM_LARGE)
              }
            }
            date
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data?.posts,
    },
    revalidate: 3600,
  };
}
export default Home;
