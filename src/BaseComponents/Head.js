import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGhost} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='rounded'>
      <Container>
        <Navbar.Brand to="/" className='py-4 px-4 text-wrap ' style={{fontWeight:'900', fontSize:'2rem', letterSpacing:'2px', fontFamily: 'Dancing Script'}}><FontAwesomeIcon icon={faGhost} size='2xl' style={{color: "#ffffff",}} /> &nbsp; <span>Shubhankar</span><span className='disp-none'> Kaushik</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className=' nav-link py-3 px-4'>About Me</Nav.Link>
            <Nav.Link as={Link} to="/resume" className=' nav-link py-3 px-4'>Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact" className=' nav-link py-3 px-4'>Contact</Nav.Link>
            <span className='py-3 px-4'>
            <div class="form-check form-switch d-flex justify-content-center ms-auto mx-3">
            </div>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;