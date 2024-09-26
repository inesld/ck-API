import React from 'react'
import Card from 'react-bootstrap/Card';

const User = ({user}) => {
  return (
    <div>
        <Card style={{ width: '18rem', border:'1px solid blue' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Card.Text>
        {user.id}
        </Card.Text>
        <Card.Text>
        {user.phone}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default User