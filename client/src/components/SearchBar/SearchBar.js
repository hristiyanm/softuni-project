import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    const apiKey = 'ad7394b1bf100f7beb12d5becf823305';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          navigate('/search', { state: data.results });
        }
      });
  };

  return (
    <Form onSubmit={searchMovies} className='d-flex'>
      <FormControl
        type='text'
        placeholder='Search'
        className='mr-2'
        value={query}
        onChange={handleInputChange}
      />
      <Button variant='outline-success' type='submit' className='ml-auto'>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
