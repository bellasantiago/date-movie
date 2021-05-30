import { React, useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import { MyContext } from '../utils/store'

function Matched() {

    const { userId } = useContext(MyContext);
    // const [matchedMovies, setMatchedMovies] = useState([])
    const [currentUserMovies, setCurrentUserMovies] = useState([]);
    const [checkUser, setCheckUser] = useState();
    const [allUsers, setAllUsers] = useState([]);
    const [checkUserMovies, setCheckUserMovies] = useState([]);
    const [matches, setMatches] = useState([]);

    // Load User data
    useEffect(() => {
        API.getUser(userId)
            .then(res => {
                setCurrentUserMovies(res.data.movies)
                console.log(currentUserMovies)
            })
            .catch(err => console.log(err));
        API.getUsers()
            .then(res => {
                // console.log(res.data)
                setAllUsers(res.data)
                console.log(allUsers)
            })
            .catch(err => console.log(err));
    }, [])

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        let formData = new FormData(event.target);

        let body = {};

        for (let pair of formData.entries()) {
            body[pair[0]] = pair[1]
        }
        setCheckUser(JSON.stringify(body.checkUser))
        console.log(checkUser)

        var userData = allUsers.filter(function(user) {
            return user.username === "BellaSantiago"
        })
        console.log(userData.[0].movies)
        setCheckUserMovies(userData.[0].movies)

        var matches = [];
        function getMatch(a, b) {
        
            for ( var i = 0; i < a.length; i++ ) {
                for ( var e = 0; e < b.length; e++ ) {
                    if ( a[i] === b[e] ) matches.push( a[i] );
                }
            }
            return matches;
        }
        
        getMatch(currentUserMovies, checkUserMovies);
        console.log(matches)
        setMatches(matches)

    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <form className="form-label-group"
            onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    id="checkUser"
                    name="checkUser"
                    className="form-control"
                    placeholder="checkUser" required autoFocus />
                <label
                    htmlFor="inputUserame">Check User</label>
                <button
                    className="btn btn-sm btn-primary btn-block text-uppercase"
                    type="submit"
                >Send</button>
            </form>

            <div className="jumbotron jumbotron-fluid" id="matchedJumbo">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Matched Movies with user {checkUser}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map(movie => {
                            return (
                                <tr key={movie}>
                                    <td>{movie}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Link to="/Movies">
                <button
                    className="btn btn-sm btn-primary btn-block text-uppercase"
                    type="submit"
                >Back to Movies</button>
            </Link>;
        </div>
    )
}

export default Matched
