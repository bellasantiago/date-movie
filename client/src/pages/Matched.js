import { React, useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import { MyContext } from '../utils/store'

function Matched() {

    const { userId } = useContext(MyContext);
    // const [matchedMovies, setMatchedMovies] = useState([])
    const [currentUserMovies, setCurrentUserMovies] = useState([]);


    // Load User data
    useEffect(() => {
        console.log("useEffect");
        API.getUser(userId)
            .then(res => {
                setCurrentUserMovies(res.data.movies)
                console.log(currentUserMovies)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="form-label-group">
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
            </div>

            <div className="jumbotron jumbotron-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">MATCHED MOVIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUserMovies.map(movie => {
                            return (
                                <tr key={movie}>
                                    <td>{movie}</td>
                                </tr>
                            )
                        })}



                    </tbody>
                </table>
            </div>
            <br></br>
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
