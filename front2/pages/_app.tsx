import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Script from "next/script";
import Layout from "components/Layout/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
            async
          />
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
