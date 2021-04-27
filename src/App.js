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
import LogIn from './components/Authentication/LogIn';
import { AuthenticationProvider } from './context/AuthenticationContext';
import GuestProfile from './components/Authentication/GuestProfile';
import Discover from './components/SearchMovie/Discover';

function App() {
  return (
    <AuthenticationProvider>
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
                  <Route exact path="/log-in" component={LogIn} />
                  <Route exact path="/profile/guest" component={GuestProfile} />
                  <Route exact path="/discover" component={Discover} />
                </Switch>
                <Footer />
              </div>
            </ScrollToTop>
        </BrowserRouter>
      </GenresProvider>
    </AuthenticationProvider>
  );
}

export default App;
