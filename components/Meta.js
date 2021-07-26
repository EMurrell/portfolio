import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>EMurrell.com</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Eric Murrell- Web Developer Portfolio"
      />
      <meta property="og:image" content="/metapic.jpg" />
      <meta name="twitter:image" content="/metapic.jpg" />
      <link rel="icon" href="/em2.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
