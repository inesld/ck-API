import React from 'react'
import Card from 'react-bootstrap/Card';

function Player({player}) {
  return (
    <div className='player'>
      <Card style={{ width: '18rem', border:'1px solid blue' }}>
      <Card.Img variant="top" src={player.imageUrl} height={150} width={290}/>
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
        {player.team}
        </Card.Text>
        <Card.Text>
        {player.nationality}
        </Card.Text>
        <Card.Text>
        {player.jerseyNumber}
        </Card.Text>
        <Card.Text>
        {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player