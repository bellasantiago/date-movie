import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all movies
  getMovies: function () {
    return axios.get("api/movies");
  },
  // Gets all users
  getUsers: function () {
    return axios.get("api/users");
  },
  // Signup
  signUp: function (body) {
    return axios.post("signup", body);
  },
  // Login
  login: function (body) {
    return axios.post("login", body);
  },
  // Save movie
  saveMovie: function (movie) {
    return axios.post("api/users", movie);
  },
  // Gets logged in user
  getUser: function (id) {
    return axios.get("api/users/" + id);
  },

};  
