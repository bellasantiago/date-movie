import React from 'react';
import '../Form.css';

function Login({ handleFormSubmit }) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-9">
                        <div className="card card-signin flex-row my-7">
                            <div className="card-img-left d-none d-md-flex"></div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Login</h6>
                                <form className="form-signin"
                                    onSubmit={handleFormSubmit}>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            id="inputUserame"
                                            name="username"
                                            className="form-control"
                                            placeholder="Username" required autoFocus />
                                        <label
                                            htmlFor="inputUserame">Username</label>
                                    </div>
                                    <br></br>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            id="inputPassword"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                            required />
                                        <label
                                            htmlFor="inputPassword">Password</label>
                                    </div>
                                    <br></br>
                                    <button
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                    >Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
