import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import LoginPage from "./pages/Login/login-page-component"
import Header from "./components/Header-Component.jsx"
import './App.css';
import Home from "./components/Home-Component";
import DetailsComponent from "./components/Details-Component"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path = "/detail/:id">
            <DetailsComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
