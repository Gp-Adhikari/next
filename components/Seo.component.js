import Head from "next/head";

export default function SEO({ title, siteTitle }) {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="icon" href="/client/logo.svg" />
      <link rel="apple-touch-icon" href="/client/logo.svg" />
      <meta
        name="description"
        content={`Zpro is a company specializing in the IT sector. We are hard
              working, creative and passionate in the field of website design,
              development and software development. We also include services
              like logo design and website redesign. We will help you grow your
              business digitally.`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"Zpro - Welcome"} />
      <meta
        property="og:description"
        content={`Zpro is well-established and trusted IT company for high quality
        services with modern and custom design for reasonable cost and
        with high efficiency. We try our best to make our clients happy
        and satisfy with our creations.`}
      />
      <meta property="og:site_name" content={"Zpro"} />
    </Head>
  );
}
