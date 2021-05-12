import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Login from "./pages/Login/login-page-component"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
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
