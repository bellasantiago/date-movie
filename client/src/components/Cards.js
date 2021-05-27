import { React, useEffect, useState, useContext } from 'react';
import TinderCard from 'react-tinder-card';
import YoutubeEmbed from "./YoutubeEmbed";
import API from '../utils/API'
import { MyContext } from '../utils/store'

function Cards() {

  const { userId } = useContext(MyContext);
  const [movies, setMovies] = useState([])
  const [lastDirection, setLastDirection] = useState()

  // Load all movies and store them with setMovies
  useEffect(() => {
    console.log("useEffect");
    API.getMovies()
      .then(res =>
        setMovies(res.data)
      )
      .catch(err => console.log(err));
  }, [userId])


  const swiped = (direction, movieTitle) => {
    console.log(movieTitle);
    setLastDirection(direction)
    if (direction === "right") {
      API.updateMovie(userId, movieTitle)
        .catch(err => console.log(err));
    }
  }

  const outOfFrame = (title) => {
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h3 className='infoText'>Swipe right to decline and left to accept the movie!</h3>
      <br></br>
      <div className='cardContainer'>
        <br></br>
        {movies.map((movie) =>
          <TinderCard
            className='swipe'
            key={movie.title}
            onSwipe={(dir) =>
              swiped(dir, movie.title)
            }
            onCardLeftScreen={() =>
              outOfFrame(movie.title)}>
            <div className="col-3" >
              <div className='card'>
                <YoutubeEmbed embedId={movie.source} />
                <h3><i className="fas fa-angle-double-left"></i><i className="fas fa-angle-double-left"></i> S W I P E <i className="fas fa-angle-double-right"></i><i className="fas fa-angle-double-right"></i></h3>
              </div>
            </div>


          </TinderCard>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* eslint-disable-next-line */}
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Cards
