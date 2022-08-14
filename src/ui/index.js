import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {
  mobileLight,
  mobileDark,
  desktopLight,
  desktopDark,
} from "images/images";
import { CheckIcon } from "icons/icons";
import {
  Header,
  TodoList,
  TodoItem,
  Checkbox,
  Span,
  TodoFooter,
  FilterContainer,
  FilterButton,
} from "components";

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
        list-style-type:none;
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
  fontNormal: "400",
  fontBold: "700",
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

export const StyledTodoList = styled(TodoList)`
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
  max-height: 500px;
  overflow: auto;
  margin: 0 auto;
  width: 100%;

  > ul {
    border-radius: 8px;
  }
`;

export const StyledTodoItem = styled(TodoItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.tertiaryText};
  background: ${({ theme }) => theme.white};
  position: relative;

  > :last-child,
  > input {
    cursor: pointer;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  user-select: none;
  > label {
    display: flex;
    align-items: end;
  }

  > label > input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    border:1px solid ${({ theme }) => theme.tertiaryText};
    padding:1rem;
    outline: none;
    cursor: pointer;
  }

  > label > input[type="checkbox"]:checked {
    position: relative;
    background-image: ${({ theme }) => theme.checkBg};
  }


  > label > input[type="checkbox"]:checked::after {
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 3px;
    top: -2px;
    content:"✔";
`;

export const StyledSpan = styled(Span)`
  margin-left: 1.6rem;
  cursor: pointer;
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.tertiaryText : theme.text};
  transition: color 0.3s ease-in-out;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.tertiaryText};
    display: ${({ isChecked }) => (isChecked ? "block" : "none")};
  }
`;

export const StyledTodoFooter = styled(TodoFooter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  background-color: #fff;
  z-index: 2;
  padding: 0 3rem;
  color: ${({ theme }) => theme.secondaryText};
  > span {
    font-size: 1.6rem;
  }

  > button {
    cursor: pointer;
    font-family: inherit;
    color: inherit;
    font-size: 1.6rem;
  }
`;

export const StyledFilterContainer = styled(FilterContainer)`
  margin: 5rem auto 0 auto;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-height: 60px;
  text-align: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 11rem;
`;

export const StyledFilterButton = styled(FilterButton)`
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme, isActive }) =>
    isActive ? theme.active : theme.secondaryText};
  font-family: inherit;
  font-size: 1.6rem;
  cursor: pointer;
`;
