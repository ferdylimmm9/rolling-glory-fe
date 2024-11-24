import AppLayout from "@/components/app-layout";
import "@/styles/globals.css";
import { Page } from "@/types/page";
import { QueryClient } from "@/utils/client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import React from "react";
import "swiper/css";


type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout =
    Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>);
  const Layout = Component.layout ?? React.Fragment;
  return (
    <QueryClientProvider client={QueryClient}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </QueryClientProvider>
  );
}
