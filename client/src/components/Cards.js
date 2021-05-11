import { React, useState } from 'react';
import TinderCard from 'react-tinder-card';

const db = [
    {
      name: 'The Matrix',
      url: 'img/sample.jpeg'
    }
  ]
  
  function Cards () {
    const characters = db
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
          {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    )
  }

export default Cards
