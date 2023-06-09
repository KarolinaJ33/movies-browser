import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
import Navigation from '../../common/Navigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
    </Switch>
  </HashRouter>
);

