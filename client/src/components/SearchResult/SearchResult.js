import { useLocation, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function SearchResult(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const movies = location.state;

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <ListGroup>
      {movies &&
        movies.map((movie) => (
          <ListGroup.Item
            onClick={() => handleMovieClick(movie.id)}
            key={movie.id}
            className='d-flex align-items-center'
          >
            <Image
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className='mr-3'
              rounded
            />
            <span>{movie.title}</span>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default SearchResult;
