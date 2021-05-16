import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import LoginPage from "./pages/Login/login-page-component"
import Header from "./components/Header-Component.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
