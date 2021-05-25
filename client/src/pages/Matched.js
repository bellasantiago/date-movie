import React from 'react'
import { Link } from 'react-router-dom'

function Matched() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">MATCHED MOVIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Forest Gump</td>
                        </tr>
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
