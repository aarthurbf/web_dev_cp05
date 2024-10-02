import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
        font-family: Arial, sans-serif;
    }

    body{
        background-color: var(--color6);
    }

    :root{
        --color1: #02732A;
        --color2: #0F8C3B;
        --color3: #72A66A;
        --color4: #AEBF8A;
        --color5: #F2D4AE;
        --color6: #F4F4F4;
        --color7: #FFFFFFFF;
        --color8: #000000FF,
        --transition: 0.5s;
    }
`;

export default GlobalStyle;
