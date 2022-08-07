import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {
  mobileLight,
  mobileDark,
  desktopLight,
  desktopDark,
} from "images/images";
import { Header } from "components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size:62.5%;
    }
 
    body{
        font-size:1.8rem;
        font-family: 'Josefin Sans', sans-serif;
        color:${({ theme }) => theme.text};
        background:url(${mobileLight});
        background-repeat:no-repeat;
        background-size:100vw;
        background-position:top;
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
  fontNormal: 400,
  fontBold: 700,
};

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;

  div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;

    div {
      cursor: pointer;
    }
  }

  h2 {
    color: ${({ theme }) => theme.white};
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontBold};
  }

  > form {
    width: 100%;
  }

  > form > input {
    width: 100%;
    padding: 1.6rem;
    border-radius: 8px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.secondaryText};
      font-weight: ${({ theme }) => theme.fontBold};
      font-size: 1.6rem;
    }
    :-ms-input-placeholder {
      color: ${({ theme }) => theme.secondaryText};
      font-weight: ${({ theme }) => theme.fontBold};
      font-size: 1.6rem;
    }
  }

  > form > input:focus {
    outline: 2px solid ${({ theme }) => theme.tertiaryText};
  }
`;
