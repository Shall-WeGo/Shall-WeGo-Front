import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
}
html{
    margin:0px;
    padding:0px;
    height:100%;
    background-color:${(props) => props.theme.background};
}

h1,h2,h3,h4,h5,p{
    color:${(props) => props.theme.fontColor}
}


`;

export default GlobalStyle;
