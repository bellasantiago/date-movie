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
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);

    let formData = new FormData(event.target);

    let body = {};

    for (let pair of formData.entries()) {
      body[pair[0]] = pair[1]
    }
    console.log(body)
    
    return API.login(body)
      .then(res => {
        console.log("Accept Token")
        setToken(res.data.token)
        setUserId(res.data.id)
        console.log(res.data.token)
        console.log(res.data.id)
      })
      .catch(err => console.log(err));
  };

  return (
    <MyContext.Provider value={{token, userId}}>
      <div className="app">
        <Router>
          <div>
            <br></br>
            <Navbar />
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/Movies" token={token} component={Movies} />
            <ProtectedRoute exact path="/Matched" token={token} component={Matched} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login">
              <Login handleFormSubmit={handleFormSubmit} />
            </Route>
          </div>
        </Router>
      </div>
    </MyContext.Provider>

  );
}

export default App;
