import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../BaseComponents/Head';
import Title from './ResumeTitle';
import App from './Components/Timeline';
import Footer from '../BaseComponents/Foot';

function Resume() {
  return (
    <Container className='py-5' id='Cont'>
      <Row>
        <Col className='text-bg-dark rounded'>
        <NavBar/>
        <Title/>
        <App/>
        <Footer/>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;