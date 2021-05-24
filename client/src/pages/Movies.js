import React from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom'


function Movies() {
    return (
        <div>
            <Cards />
            <br></br>
            <Link to="/Matched">
                <button
                    className="btn btn-sm btn-primary btn-block text-uppercase"
                    type="submit"
                >My Matched Movies</button>
            </Link>;
        </div>
    )
}

export default Movies
