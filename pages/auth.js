import AuthForm from "../components/auth/auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import React from "react";

function Auth() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <React.Fragment>
      <Head>
        <title>Cubour - Login/Register</title>
        <meta name="description" content="Log in or create an account" />
      </Head>
      <AuthForm />
    </React.Fragment>
  );
}

export default Auth;
