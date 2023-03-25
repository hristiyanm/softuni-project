import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'ad7394b1bf100f7beb12d5becf823305';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <h1>Popular Movies</h1>
      <Row xs={2} md={5} className='g-4'>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Card>
                <Card.Img
                  variant='top'
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
