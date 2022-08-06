import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "ui/index";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      mama
    </ThemeProvider>
  );
}

export default App;
