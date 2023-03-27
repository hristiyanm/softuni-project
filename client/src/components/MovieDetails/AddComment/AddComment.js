import { useForm } from '../../../hooks/useForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: '',
    },
    onCommentSubmit
  );

  return (
    <div className='create-comment'>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='comment'>
          <Form.Label>Add new comment:</Form.Label>
          <Form.Control
            as='textarea'
            name='comment'
            placeholder='Comment......'
            value={values.comment}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add Comment
        </Button>
      </Form>
    </div>
  );
};
