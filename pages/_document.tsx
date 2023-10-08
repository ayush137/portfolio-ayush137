import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
