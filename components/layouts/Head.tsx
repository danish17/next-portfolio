import Head from "next/head";

const CustomHead = (props: { title: string }) => {
  const { title } = props;

  return (
    <Head>
      <title>
        Danish Shakeel — Full-Stack Developer, Educator, and Researcher based in
        Kashmir.
      </title>
      <meta
        name="title"
        content="Danish Shakeel — Full-Stack Developer, Educator, and Researcher based in Kashmir."
      />
      <meta
        name="description"
        content="I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iamdani.sh" />
      <meta
        property="og:title"
        content="Danish Shakeel — Full-Stack Developer, Educator, and Researcher based in Kashmir."
      />
      <meta
        property="og:description"
        content="I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs."
      />
      <meta property="og:image" content="https://iamdani.sh/og-meta-img.jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://iamdani.sh" />
      <meta
        property="twitter:title"
        content="Danish Shakeel — Full-Stack Developer, Educator, and Researcher based in Kashmir."
      />
      <meta
        property="twitter:description"
        content="I am an award-winning software engineer who loves to solve complex engineering problems and help businesses achieve their goals. I can help you take your business to new digital heights with enterprise-grade solutions specially crafted for your needs."
      />
      <meta
        property="twitter:image"
        content="https://iamdani.sh/og-meta-img.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default CustomHead;
