import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function Progress() {
  const cardStyle = {
    backgroundColor: '#212529', // Bootstrap dark background
    borderRadius: '20px',
    border : '1.5px solid rgba(255, 255, 255, 0.3)',
    // boxShadow: '0 4px 10px rgba(255, 255, 255, 0.07)',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    // transform: 'translateY(-8px)',
    // boxShadow: '0 8px 20px rgba(255, 255, 255, 0.2)',
  };

  const badgeStyle = {
    fontSize: '0.9rem',
    padding: '8px 14px',
    borderRadius: '12px',
  };

  return (
    <Container className='pb-5 pt-4'>
      <Row className='g-4'>

        {/* Frontend Skills */}
        <Col md={4}>
          <Card
            style={cardStyle}
            className="text-center text-light p-3"
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, hoverStyle);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, cardStyle);
            }}
          >
            <Card.Body className='pt-0'>
              <Card.Title className="mb-4 pb-2 border-bottom ">Frontend</Card.Title>
              <div className='d-flex flex-wrap gap-2 justify-content-center'>
                <Badge bg="primary" style={badgeStyle}>HTML</Badge>
                <Badge bg="primary" style={badgeStyle}>CSS</Badge>
                <Badge bg="primary" style={badgeStyle}>React.js</Badge>
                <Badge bg="primary" style={badgeStyle}>Three.js</Badge>
                <Badge bg="primary" style={badgeStyle}>Python Tkinter</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Backend Skills */}
        <Col md={4}>
          <Card
            style={cardStyle}
            className="text-center text-light p-3"
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, hoverStyle);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, cardStyle);
            }}
          >
            <Card.Body className='pt-0'>
            <Card.Title className="mb-4 pb-2 border-bottom ">Backend</Card.Title>
              <div className='d-flex flex-wrap gap-2 justify-content-center'>
                <Badge bg="success" style={badgeStyle}>Express.js</Badge>
                <Badge bg="success" style={badgeStyle}>Node.js</Badge>
                <Badge bg="success" style={badgeStyle}>MongoDB</Badge>
                <Badge bg="success" style={badgeStyle}>MySQL</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Programming Languages */}
        <Col md={4}>
          <Card
            style={cardStyle}
            className="text-center text-light p-3"
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, hoverStyle);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, cardStyle);
            }}
          >
            <Card.Body className='pt-0'>
            <Card.Title className="mb-4 pb-2 border-bottom ">Programming Languages</Card.Title>
              <div className='d-flex flex-wrap gap-2 justify-content-center'>
                <Badge bg="warning" text="dark" style={badgeStyle}>Python</Badge>
                <Badge bg="warning" text="dark" style={badgeStyle}>JavaScript</Badge>
                <Badge bg="warning" text="dark" style={badgeStyle}>C++</Badge>
                <Badge bg="warning" text="dark" style={badgeStyle}>C</Badge>
                <Badge bg="warning" text="dark" style={badgeStyle}>Matlab</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Progress;
