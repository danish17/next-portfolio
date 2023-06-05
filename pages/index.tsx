import Head from "next/head";
import PageShell from "../components/layouts/PageShell";
import { Row, Text } from "@nextui-org/react";
import Header from "../components/layouts/Header";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { IPosts } from "../types/post";
import dynamic from "next/dynamic";
import { PostSkeleton } from "../components/layouts/Skeleton";
import WhoAmI from "../components/sections/WhoAmI";
import WriteToMe from "../components/sections/Email";
import WhatIDo from "../components/sections/WhatIDo";

const Post = dynamic(() => import("../components/cards/Post"), {
  ssr: false,
  loading: () => <PostSkeleton />,
});

const Home = (props: { posts: IPosts }) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Danish Shakeel</title>
        <meta
          name="description"
          content="Award-winning full-stack engineer who loves to solve complex software engineering problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageShell>
        <Row css={{ padding: 0, "@sm": { padding: 20 } }}>
          <Header />
        </Row>
        <hr />
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
        <hr />
        <WhoAmI />
        <hr />
        <WhatIDo />
        <WriteToMe />
      </PageShell>
    </>
  );
};

export async function getServerSideProps() {
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
                sourceUrl(size: LARGE)
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
  };
}
export default Home;
