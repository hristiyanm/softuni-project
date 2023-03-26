import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SearchResult from './components/SearchResult/SearchResult';
import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/search' element={<SearchResult />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
