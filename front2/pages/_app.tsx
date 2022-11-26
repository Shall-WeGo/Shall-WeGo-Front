import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals.style";
import { darkTheme, lightTheme } from "styles/theme";
// import Layout from "components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
          async
        />
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
