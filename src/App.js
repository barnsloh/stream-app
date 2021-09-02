import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/series" component={SeriesPage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path='*' component={ErrorPage} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
