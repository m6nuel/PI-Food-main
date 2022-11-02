import './App.css';
import { BrowserRouter as Router,
   Redirect,
   Route,
   Switch } from "react-router-dom"
import { LandingPage } from './components/LandingPage';
import { Home } from './components/Home';
import { Detail } from './components/Detail';
import { Create } from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
