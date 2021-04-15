import './css/app.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MoviesHome from './components/MoviesHome/MoviesHome';
import SeriesHome from './components/SeriesHome/SeriesHome';
import Movie from './components/MoviesHome/Movie';
import {GenresProvider} from './context/MoviesGenresContext';
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
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
      </BrowserRouter>
    </GenresProvider>
  );
}

export default App;
