import { HashRouter, Route } from 'react-router-dom/cjs/react-router-dom';
import Navigation from '../../common/Navigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { toMovie, toPeople } from './routes';
import MovieList from '../../features/MoviesBrowser/MovieList';
import PeopleList from '../../features/PeopleBrowser/PeopleList';

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie()}>
        <MovieList />
      </Route>
      <Route path={toPeople()}>
        <PeopleList/>
      </Route>
    </Switch>
  </HashRouter>
);

