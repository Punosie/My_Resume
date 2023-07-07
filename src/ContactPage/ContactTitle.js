import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Title() {
  return (
    <Container className='py-5'>
      <Row>
        <Col className='text-bg-dark p-0 rounded'>
        <h1 className='p-5 m-0 ' style={{backgroundColor:"#252525", borderBottom:"1px solid #333", borderTop:"1px solid #333" }}>Contact</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;