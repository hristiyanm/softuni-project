import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuthContext } from '../../contexts/AuthContext';
import * as commentService from '../../services/commentService';
import { AddComment } from './AddComment/AddComment';
import { commentReducer } from '../../reducers/commentReducer';

function MovieDetails() {
  const { id } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const [comment, dispatch] = useReducer(commentReducer, {});
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = 'ad7394b1bf100f7beb12d5becf823305';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  useEffect(() => {
    commentService.getAll(id).then((comments) => {
      const commentsState = {
        comments,
      };

      dispatch({ type: 'COMMENT_FETCH', payload: commentsState });
    });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(id, values.comment);

    dispatch({
      type: 'COMMENT_ADD',
      payload: response,
      userEmail,
    });
  };

  return (
    <Container style={{ width: '60%', margin: 'auto' }}>
      <Row className='justify-content-center'>
        <Col
          xs={12}
          md={5}
          className='d-flex justify-content-center mb-3 mb-md-0'
        >
          <Card
            style={{ width: '100%', maxWidth: '230px', maxHeight: '345px' }}
          >
            <Card.Img
              variant='top'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              style={{
                height: '100%',
                objectFit: 'contain',
                maxWidth: '230px',
                maxHeight: '345px',
              }}
            />
          </Card>
        </Col>
        <Col xs={12} md={7} className='d-flex align-items-center'>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </Col>
      </Row>
      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
      <div className='details-comments'>
        <h2>Comments:</h2>
        {comment.comments &&
          comment.comments.map((x) => (
            <Card key={x._id} className='comment'>
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>
                  {x.author.email}
                </Card.Subtitle>
                <Card.Text>{x.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}

        {!comment.comments?.length && (
          <p className='no-comment'>No comments.</p>
        )}
      </div>
    </Container>
  );
}

export default MovieDetails;
