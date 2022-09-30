import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
}
html{
    height:100%;
    background-color:${(props) => props.theme.background};
}
div{
}
`;

export default GlobalStyle;
