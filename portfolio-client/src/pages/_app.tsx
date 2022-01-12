import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from "next/app";
import SettingsProvider from "../context/settings-context";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <SettingsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SettingsProvider>
  );
}

export default MyApp;
