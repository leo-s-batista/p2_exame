import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

import './styles.scss';

export function Menu() {
  return (
    <header>
      <Navbar expand="lg" className="bg-green-primary">
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/inscricao" className="nav-link">Inscrição</Link>
              <Link to="/cancelamento" className="nav-link">Cancelamento</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
}