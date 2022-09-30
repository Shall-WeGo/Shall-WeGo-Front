import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals.style";
import { darkTheme, lightTheme } from "styles/theme";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6ea09b90ac10b7d83d7822871393275c&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
