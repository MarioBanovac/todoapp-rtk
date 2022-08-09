import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  lightTheme,
  StyledContainer,
  StyledHeader,
  StyledTodoList,
} from "ui";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader />
        <StyledTodoList />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
