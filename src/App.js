import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, StyledContainer, StyledHeader } from "ui";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
