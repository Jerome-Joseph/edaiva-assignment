import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
