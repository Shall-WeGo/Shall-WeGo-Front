import Nav from "components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals.style";
import { darkTheme, lightTheme } from "styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as L from "./Layout.style";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pathName =router.pathname;
  const [isShowNav,setIsShowNav] = useState(true);

  useEffect(()=>{
    if(pathName=="/signin"||pathName=="/signup") setIsShowNav(false);
    else setIsShowNav(true)
  },[])
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <L.LayoutContainer>
        { isShowNav &&<Nav />}
        {children}
      </L.LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
