import Layout from "@/components/layout/layout";
import "@/styles/styles.scss";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session} basePath="/api/auth">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
