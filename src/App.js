import './css/app.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MoviesHome from './components/MoviesHome/MoviesHome';
import SeriesHome from './components/SeriesHome/SeriesHome';
import {GenresProvider} from './context/MoviesGenresContext';

function App() {
  return (
    <GenresProvider>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={MoviesHome} />
            <Route exact path="/home/series" component={SeriesHome} />
          </Switch>
        </div>
      </BrowserRouter>
    </GenresProvider>
  );
}

export default App;
