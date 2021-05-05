import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Home'
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/movie/:movieId' exact>
            <MovieDetails />
          </Route>
          <Route path='*' exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
