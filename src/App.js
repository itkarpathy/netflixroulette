import "./App.css";
import { Switch, Route, Redirect} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/movie'/>
          </Route>
          <Route path="/movie" exact>
            <Home />
          </Route>
          <Route path={`/movie/:movieId`}>
            <MovieDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
