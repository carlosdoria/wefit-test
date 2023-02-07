import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/globalStyles";

import { Header } from "@/components/Header";

import { CartProvider } from "@/context/Cart";
import { ProductsProvider } from "@/context/Product";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <ProductsProvider>
          <Head>
            <title>WeMovies</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <meta name="description" content="Site de e-commerce de filmes" />
          </Head>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ProductsProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
