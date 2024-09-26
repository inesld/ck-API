import React from 'react'
import players from './players.json'
import Player from './Player'
import './PlayersList.css'
const PlayersList = () => {
  return (
    <div className='playersList'>
        {
            players.map((player,index) => <Player player={player} key={index} />)
        }
    </div>
  )
}

export default PlayersList