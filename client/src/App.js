import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './components/MovieDetails';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout';

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
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
