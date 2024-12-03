import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
  return(
    <Container className='py-5'>
      <Row>
        {/* HTML Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>HTML</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90} />
        </Col>

        {/* CSS Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>CSS</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90} />
        </Col>

        {/* Python Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Python</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={90} />
        </Col>

        {/* React.js Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>React.js</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={75} />
        </Col>

        {/* JavaScript Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>JavaScript</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={70} />
        </Col>

        {/* MySQL Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>MySQL</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={60} />
        </Col>

        {/* C++ Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>C++</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={50} />
        </Col>

        {/* C Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>C</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40} />
        </Col>

        {/* Matlab Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Matlab</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40} />
        </Col>

        {/* Three.js Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Three.js</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={40} />
        </Col>

        {/* Blender Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Blender</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={75} />
        </Col>

        {/* Express.js Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Express.js</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={70} />
        </Col>

        {/* Node.js Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>Node.js</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={75} />
        </Col>

        {/* MongoDB Skill */}
        <Col md={6} className='text-bg-dark rounded py-2'>   
            <h6 className='mx-5'>MongoDB</h6>
            <ProgressBar className='mx-5 my-3 progress-sm' now={60} />
        </Col>

      </Row>
    </Container>
  );
}

export default Progress;
