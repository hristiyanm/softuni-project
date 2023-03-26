import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
    },
    onLoginSubmit
  );

  return (
    <Container className='d-flex justify-content-center'>
      <Form method='POST' onSubmit={onSubmit}>
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

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  );
}
