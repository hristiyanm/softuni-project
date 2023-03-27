import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';

function MyProfile() {
  const { userEmail, username } = useContext(AuthContext);

  return (
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Username:</Card.Title>
          <Card.Text>{username}</Card.Text>
          <Card.Title>Email:</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{userEmail}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyProfile;
