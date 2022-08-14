import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  lightTheme,
  StyledContainer,
  StyledHeader,
  StyledTodoList,
  StyledFilterContainer,
} from "ui";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader />
        <StyledTodoList />
        <StyledFilterContainer />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
