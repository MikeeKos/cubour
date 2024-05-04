import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import { GameContextProvider } from "../store/game-context";
import { SpecialBlockContextProvider } from "../store/special-block-context";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <GameContextProvider>
          <SpecialBlockContextProvider>
            <Layout>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link
                  rel="icon"
                  href="/icon.png"
                  type="image/png"
                  sizes="any"
                />
              </Head>
              <Component {...pageProps} />
            </Layout>
          </SpecialBlockContextProvider>
        </GameContextProvider>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
