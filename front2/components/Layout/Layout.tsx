import Nav from "components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals.style";
import { darkTheme, lightTheme } from "styles/theme";
import * as L from "./Layout.style";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <L.LayoutContainer>
        <Nav />
        {children}
      </L.LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
