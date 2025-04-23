import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CSS from '../../Assets/img/CSS_Certificate.png';
import Python from '../../Assets/img/Python_Certificate.png';
import Matlab from '../../Assets/img/MATLAB_Certificate.png';

function Certificate() {
  const cardStyle = {
    width: '18rem', // Same width for all
    minHeight: '350px', // Set a minimum height for consistency
    backgroundColor: '#212529',
    // light border
    border : '1.5px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    // boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className='my-5 py-4 gap-4 d-flex justify-content-around align-items-center flex-wrap'>
      
      {/* CSS Certificate */}
      <Card 
        style={{ ...cardStyle }} 
        className="text-light p-3 text-center"
        onMouseEnter={e => Object.assign(e.currentTarget.style, { ...cardStyle})}
        onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <Card.Img variant="top" src={CSS} style={{ borderRadius: '15px', objectFit: 'cover', height: '200px' }} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className="mb-3">CSS</Card.Title>
          <Button 
            href='https://www.hackerrank.com/certificates/5a502b972067' 
            target='_blank' 
            variant="primary" 
            className="w-100 mt-auto"
          >
            View
          </Button>
        </Card.Body>
      </Card>

      {/* Python Certificate */}
      <Card 
        style={{ ...cardStyle }} 
        className="text-light p-3 text-center"
        onMouseEnter={e => Object.assign(e.currentTarget.style, { ...cardStyle})}
        onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <Card.Img variant="top" src={Python} style={{ borderRadius: '15px', objectFit: 'cover', height: '200px' }} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className="mb-3">Python</Card.Title>
          <Button 
            href='https://www.hackerrank.com/certificates/e6d8b0372a01' 
            target='_blank' 
            variant="primary" 
            className="w-100 mt-auto"
          >
            View
          </Button>
        </Card.Body>
      </Card>

      {/* MATLAB Certificate */}
      <Card 
        style={{ ...cardStyle }} 
        className="text-light p-3 text-center"
        onMouseEnter={e => Object.assign(e.currentTarget.style, { ...cardStyle})}
        onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <Card.Img variant="top" src={Matlab} style={{ borderRadius: '15px', objectFit: 'cover', height: '200px' }} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className="mb-3">MATLAB</Card.Title>
          <Button 
            href='https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d95c280b-49a4-480d-868a-96bc2cd8db7a&' 
            target='_blank' 
            variant="primary" 
            className="w-100 mt-auto"
          >
            View
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Certificate;
