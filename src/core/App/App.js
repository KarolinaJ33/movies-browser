import { HashRouter, Redirect, Route } from 'react-router-dom/cjs/react-router-dom';
import Navigation from '../../common/Navigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { toMovies, toPeople, toMovie, toPerson } from './routes';
import MovieList from '../../features/MoviesBrowser/MovieList';
import { MovieDetails } from '../../features/MoviesBrowser/MovieDetails';
import { PersonPage } from '../../features/PeopleBrowser/PersonPage';
import { PeopleList } from '../../features/PeopleBrowser/PeopleList';

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie()}>
        <MovieDetails />
      </Route>
      <Route path={toMovies()}>
        <MovieList />
      </Route>
      <Route path={toPerson()}>
        <PersonPage />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);

