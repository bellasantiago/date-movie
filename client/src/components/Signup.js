import React from 'react'
import '../Form.css'

function Signup() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-9 mx-auto">
                    <div className="cardMovie card-signin flex-row my-7">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body">
                            <h6 className="card-title text-center">Register</h6>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                                    <label for="inputUserame">Username</label>
                                </div>

                                <div class="form-label-group">
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                                    <label for="inputEmail">Email address</label>
                                </div>

                                <hr></hr>

                                <div class="form-label-group">
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                    <label for="inputPassword">Password</label>
                                </div>

                                <div class="form-label-group">
                                    <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required />
                                    <label for="inputConfirmPassword">Confirm password</label>
                                </div>

                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
