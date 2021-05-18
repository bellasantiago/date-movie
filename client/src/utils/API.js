import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("api/movies");
  }
};
