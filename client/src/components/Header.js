import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../contexts/AuthContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        MovieDB
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>{/* Add other NavLinks here */}</Nav>
        <Nav className='ml-auto'>
          {isAuthenticated && (
            <div id='user'>
              <span>{userEmail}</span>
              <Link to='/logout'>Logout</Link>
            </div>
          )}

          {!isAuthenticated && (
            <div id='guest'>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
          )}
          <SearchBar />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// export const Header = () => {
//   return (
//     <Navbar bg='light' expand='lg'>
//       <Container>
//         <Navbar.Brand href='#home'>MovieDB</Navbar.Brand>
//         <Navbar.Toggle aria-controls='basic-navbar-nav' />
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <Nav className='me-auto'>
//             <Nav.Link href='#home'>Home</Nav.Link>
//             <Nav.Link href='#link'>Link</Nav.Link>
//             <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
//               <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
//               <NavDropdown.Item href='#action/3.2'>
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href='#action/3.4'>
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
