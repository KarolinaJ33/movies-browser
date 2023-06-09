import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme'; 
import MoviesBrowser from '././features/MoviesBrowser/MoviePage/MovieTile';

function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MoviesBrowser />
  </ThemeProvider>
  );
}

export default App;
