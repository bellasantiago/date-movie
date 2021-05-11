import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Matched from './pages/Matched'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <br></br>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/Matched" component={Matched} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
