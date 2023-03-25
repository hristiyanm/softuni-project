import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../contexts/AuthContext';

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onRegisterSubmit
  );

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Form method='post' onSubmit={onSubmit} style={{ width: '400px' }}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            placeholder='Enter username'
            value={values.username}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            value={values.email}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={values.confirmPassword}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Register
        </Button>
      </Form>
    </Container>
  );
}
