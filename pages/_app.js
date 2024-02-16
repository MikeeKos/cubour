import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import { GameContextProvider } from "../store/game-context";
import React from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <GameContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GameContextProvider>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
