import React from 'react'

function Login() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-7">
                            <div className="card-img-left d-none d-md-flex"></div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Login</h6>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                                        <label for="inputUserame">Username</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Password</label>
                                    </div>

                                    <button
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = '/Movies';
                                        }}
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
