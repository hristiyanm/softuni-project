import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieDetails() {
  const { id } = useParams();
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
  // want movie title, overview, release year, genres, runtime

  if (!movie) {
    return <div>Loading...</div>;
  }

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
    </Container>
  );
}

export default MovieDetails;
