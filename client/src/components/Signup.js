import React, { useContext } from 'react'
import '../Form.css'
import API from '../utils/API'
import { MyContext } from '../utils/store'
import { useHistory } from 'react-router-dom'

function Signup() {

    const history = useHistory()

    const token = useContext(MyContext)
    console.log(token)

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);

        let formData = new FormData(event.target);

        let body = {};

        for (let pair of formData.entries()) {
            body[pair[0]] = pair[1]
        }
        console.log(body)
        API.signUp(body)
            .then(data => history.push("/"))
            .catch(err => console.log(err));
        console.log(body)

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-9">
                    <div className="card card-signin flex-row my-7">
                        <div className="card-body">
                            <h6 className="card-title text-center">Register</h6>
                            <form className="form-signin"
                                onSubmit={handleFormSubmit}>
                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        id="inputUserame"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                        required autoFocus />
                                    <label htmlFor="inputUserame">Username</label>
                                </div>

                                <div className="form-label-group">
                                    <input
                                        type="email"
                                        id="inputEmail"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        required />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <hr></hr>

                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        id="inputPassword"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                {/* <Link to="/"> */}
                                <button
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit"
                                >Register</button>
                                {/* </Link> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
