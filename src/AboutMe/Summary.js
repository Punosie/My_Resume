import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
// import DownloadBtn from './Dowload';
import Shubh from '../Assets/img/Shubhankar.jpg'
// import MyPDFViewer from './Pdf';
import onButtonClick from './Pdf';

function Content() {
    return (
      <Container>
        <Row className='text-bg-dark'>
            <Col md={6} className=' pt-5 p-auto m-auto text-center'>
                <Image className='img_style' src={Shubh}  />
            </Col>
            <Col md={6} className='pt-5 pe-3'>
                <h1 style={{fontWeight:"bold", letterSpacing:"2px"}}> Shubhankar <span style={{color:'#007ced'}}>Kaushik</span></h1>
                <p style={{color:"#b7b7b7", lineHeight:"24px"}}> An ECE student with a deep-rooted passion for technology. With my enthusiasm for web development, a knack for problem-solving, and a commitment to continuous learning, I am excited to embark on a journey that combines my love for technology and my drive to make a positive impact in the digital realm. </p>
                <div>
                  <button className="my-5 px-4 py-2 btn00 clk" onClick={onButtonClick}>
                    Download CV
                  </button>
                </div>
            </Col>
        </Row>
      </Container>
    );
  }
  
  export default Content;