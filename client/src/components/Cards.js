import { React, useState } from 'react';
import TinderCard from 'react-tinder-card';
import YoutubeEmbed from "./YoutubeEmbed";

const db = [
  {
    name: 'Star Wars: The Force Awakens',
    id: 'sGbxmsDFVnE'
  },
  {
    name: 'The Godfather',
    id: 'sY1S34973zA'
  },
  {
    name: 'The Matrix',
    id: 'vKQi3bBA1y8'
  }
]

function Cards() {
  const movies = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <h3 className='infoText'>Swipe RIGHT or LEFT to choose your movie!</h3>

      <div className='cardContainer'>
        <br></br>
        {movies.map((movie) =>
          <TinderCard className='swipe' key={movie.name} onSwipe={(dir) => swiped(dir, movie.name)} onCardLeftScreen={() => outOfFrame(movie.name)}>
            <div className="col-3">
              <div className='card'>
                <YoutubeEmbed embedId={movie.id} />
                <h3>{movie.name}</h3>
              </div>
            </div>


          </TinderCard>
        )}
      </div>
      <br></br>
      <br></br>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Cards
