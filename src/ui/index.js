import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    ::root{
        --fw-400:400;
        --fw-700:700;
    }

    html{
        font-size:62.5%;
    }
 
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-size:1.8rem;
        font-family: 'Josefin Sans', sans-serif;
        color:${({ theme }) => theme.text};
    }

    a{
        text-decoration:none;
    }

    button{
        background:none;
        border:none;
    }

    ul{
        list-style:none;
    }

    img{
        display:block;
        max-width:100%;
    }
`;

export const lightTheme = {
  white: "hsl(255, 100%, 100%)",
  text: "hsl(235, 19%, 35%)",
  secondaryText: "hsl(236, 9%, 61%)",
  tertiaryText: "hsl(233, 11%, 84%)",
  active: "hsl(220, 98%, 61%)",
  checkBg: "linear-gradient(#57ddff,#c058f3)",
  complete: "hsl(236, 33%, 92%)",
};
