import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../BaseComponents/Head'
import Footer from '../BaseComponents/Foot'
import Title from './ContactTitle';
import ContactArea from './ContactArea';

function Contact() {
  return (
    <Container className='py-5' id='Cont'>
      <Row>
        <Col className='text-bg-dark rounded'>
        <NavBar/>
        <Title/>
        <ContactArea/>
        <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;