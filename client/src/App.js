import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Matched from './pages/Matched'
import Signup from './components/Signup'
import Login from './components/Login'
import { MyContext } from './utils/store'
import API from './utils/API'

function App() {

  const [token, setToken] = useState(null)

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);

    let formData = new FormData(event.target);

    let body = {};

    for (let pair of formData.entries()) {
      body[pair[0]] = pair[1]
    }
    console.log(body)
    API.login(body)
      .then(res => {
        console.log("Accept Token")
        setToken(res.data.token)
        console.log(res.data.token)
      })
      .catch(err => console.log(err));

    // window.location.href = '/movies'
    // console.log()
  };

  return (
    <MyContext.Provider value={token}>
      <div className="app">
        <Router>
          <div>
            <br></br>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Movies" component={Movies} />
            <Route exact path="/Matched" component={Matched} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login">
              <Login handleFormSubmit={handleFormSubmit}/>
            </Route>
          </div>
        </Router>
      </div>
    </MyContext.Provider>

  );
}

export default App;
