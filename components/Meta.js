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
      <meta property="og:image" content="/previewpic.jpg" />
      <meta property="og:title" content="EMurrell.com" />
      <meta
        property="og:description"
        content="Eric Murrell Web Developer Portfolio"
      />
      <meta name="twitter:image" content="/previewpic.jpg" />
      <meta name="twitter:title" content="EMurrell.com" />
      <meta
        name="twitter:description"
        content="Eric Murrell Web Developer Portfolio"
      />
      <link rel="icon" href="/em2.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
