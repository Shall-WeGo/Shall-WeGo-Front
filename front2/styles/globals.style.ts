import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'); */
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
h1{
    font-family: 'Inter', sans-serif;
}
h2,h3,h4,h5,p,span{
    font-family: 'Noto Sans KR', sans-serif;
}
`;

export default GlobalStyle;
