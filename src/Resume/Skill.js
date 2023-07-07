import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
  return(
    <Container className='py-5'>
      <Row>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>HTML</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>CSS</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Bootstrap</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Python</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={60}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>C++</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={50}/>
        </Col><Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>C</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={50}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Javascript</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>React</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Matlab</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40}/>
        </Col>
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>MySQL</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Progress;