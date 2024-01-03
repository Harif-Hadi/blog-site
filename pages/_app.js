import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FS7CYVZPJG"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FS7CYVZPJG');
    `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
