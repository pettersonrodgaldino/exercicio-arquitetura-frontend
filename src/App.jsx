import  Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Home  from "./views/Home";
import  About  from "./views/About";
import  Trips from "./views/MyTrips";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className = 'wrapper'>
          <Header />
          <Switch>
            <Route path="/sobre">
              <About />
            </Route>
            <Route path="/viagens">
              <Trips />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
