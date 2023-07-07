import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CSS from '../../Assets/img/CSS_Certificate.png'
import Python from '../../Assets/img/Python_Certificate.png'
import Matlab from '../../Assets/img/MATLAB_Certificate.png'

function Certificate() {
  return (
    <div className='my-5 py-4 gap-3 d-flex justify-content-around align-items-center'>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={CSS} />
      <Card.Body>
        <Card.Title style={{textAlign:"Center"}}>CSS</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button href='https://www.hackerrank.com/certificates/5a502b972067' target='_blank' variant="primary">View</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={Python} />
      <Card.Body>
        <Card.Title style={{textAlign:"Center"}}>Python</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button href='https://www.hackerrank.com/certificates/e6d8b0372a01' target='_blank' variant="primary">View</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Matlab} />
      <Card.Body>
        <Card.Title style={{textAlign:"Center"}}>MATLAB</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button href='https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d95c280b-49a4-480d-868a-96bc2cd8db7a&' target='_blank' variant="primary">View</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Certificate;