import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Container className='padt-0 py-5 border-top'>
      <Row className='text-bg-dark px-5 rounded text-center'>
        {/* Instagram */}
        <Col md={4} lg={3}>
          <NavLink
            className='text-light'
            to="https://www.instagram.com/punosie/"
            rel="noreferrer"
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            <i className="fa-brands fa-instagram" style={{ color: "#FFD43B", fontSize: '2rem' }}></i>
          </NavLink>
        </Col>

        {/* LinkedIn */}
        <Col md={4} lg={3}>
          <NavLink
            className='text-light'
            to="https://www.linkedin.com/in/shubhankar-kaushik-19968b246"
            rel="noreferrer"
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            <i className="fa-brands fa-linkedin-in" style={{ color: "#FFD43B", fontSize: '2rem' }}></i>
          </NavLink>
        </Col>

        {/* GitHub */}
        <Col md={4} lg={3}>
          <NavLink
            className='text-light'
            to="https://github.com/Punosie"
            rel="noreferrer"
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            <i className="fa-brands fa-github" style={{ color: "#FFD43B", fontSize: '2rem' }}></i>
          </NavLink>
        </Col>

        {/* Signature */}
        <Col sm={12} md={12} lg={3} className='text-center'>
          <span>
            Made with&nbsp;
            <i className="fa-solid fa-heart" style={{ color: "#ff0000"}}></i>
            &nbsp;by Shubhankar Kaushik
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
