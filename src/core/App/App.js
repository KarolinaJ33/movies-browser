import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <p>Movies Browser</p>
  </ThemeProvider>
  );
}

export default App;
