import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import SimpleLineIcon from 'react-simple-line-icons';
// import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (

    <Container className='padt-0 py-5'>
      <Row className='text-bg-dark px-5 rounded text-center'>
          <Col md={4} lg={3}><NavLink className=' text-light' to="https://www.instagram.com/shubhankar.2003/" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>Instagram<SimpleLineIcon name="SocialInstagram" /></NavLink></Col>
          <Col md={4} lg={3}><NavLink className=' text-light' to="https://www.linkedin.com/in/shubhankar-kaushik-19968b246" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>Linkedin</NavLink></Col>
          <Col md={4} lg={3}><NavLink className=' text-light' to="https://github.com/Shubhankar2003" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>GitHub</NavLink></Col>
          <Col sm={12} md={12} lg={3} className='text-center' ><span>Made with&nbsp; <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000", paddingTop:'5px'}} />&nbsp; by Shubhankar Kaushik</span></Col>
      </Row>
    </Container>
  );
}

export default Footer;  