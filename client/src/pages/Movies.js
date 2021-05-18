import React from 'react';
import Cards from '../components/Cards';


function Movies() {
    return (
        <div>
            <Cards />
            <br></br>
            <button
                className="btn btn-sm btn-primary btn-block text-uppercase"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/Matched';
                }}
            >My Matched Movies</button>
        </div>
    )
}

export default Movies
