import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Login from "./pages/Login/login-page-component"
import Header from "./components/Header-Component"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
