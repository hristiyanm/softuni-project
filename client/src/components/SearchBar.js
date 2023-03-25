import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    searchMovies(event.target.value);
  };

  const searchMovies = (query) => {
    const apiKey = 'ad7394b1bf100f7beb12d5becf823305';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setMovies(data.results);
        }
      });
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search'
          className='mr-sm-2'
          value={query}
          onChange={handleInputChange}
        />
        <Button variant='outline-success'>Search</Button>
      </Form>
      {movies.length > 0 && (
        <ListGroup className='mt-2'>
          {movies.map((movie) => (
            <ListGroup.Item
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
            >
              {movie.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default SearchBar;
