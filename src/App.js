import './css/app.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MoviesHome from './components/MoviesHome/MoviesHome';
import SeriesHome from './components/SeriesHome/SeriesHome';
import Movie from './components/MoviesHome/Movie';
import Serie from './components/Series/Serie';
import {GenresProvider} from './context/GenresContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <GenresProvider>
      <BrowserRouter>
          <ScrollToTop>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={MoviesHome} />
                <Route exact path="/series" component={SeriesHome} />
                <Route exact path="/details/movie/:id" component={Movie}/>
                <Route exact path="/details/series/:id" component={Serie}/>
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
      </BrowserRouter>
    </GenresProvider>
  );
}

export default App;
