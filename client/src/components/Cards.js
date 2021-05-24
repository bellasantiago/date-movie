import { React, useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import YoutubeEmbed from "./YoutubeEmbed";
import API from '../utils/API'

function Cards() {
  
  const [movies, setMovies] = useState([])
  const [lastDirection, setLastDirection] = useState()

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getMovies()
      .then(res => 
        setMovies(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (title) => {
    console.log(title + ' left the screen!')
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
              swiped(dir, movie.title)}
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
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Cards
