import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Shubh from '../Assets/img/Shubhankar01.jpg';
import onButtonClick from './Pdf';

function Content() {
    return (
      <Container>
        <Row className='text-bg-dark'>
            {/* Profile Image Section */}
            <Col md={6} className='pt-5 p-auto m-auto text-center'>
                <Image className='img_style rounded-circle' src={Shubh} alt="Shubhankar Kaushik" />
            </Col>

            {/* Personal Description Section */}
            <Col md={6} className='pt-5 pe-3'>
                <h1 style={{fontWeight:"bold", letterSpacing:"2px"}}>
                    Shubhankar <span style={{color:'#007ced'}}>Kaushik</span>
                </h1>
                <p style={{color:"#b7b7b7", lineHeight:"24px"}}>
                    I am a final-year student pursuing a Bachelor of Technology (B. Tech) in Electronics and Communication Engineering (ECE) from Jaypee Institute of Information Technology, Noida. I am deeply passionate about technology, especially in the fields of web development, computer vision, and robotics.
                    <br /><br />
                    With hands-on experience in React.js, Python, and the MERN stack, I am eager to combine my skills to build impactful solutions. My problem-solving mindset, creativity, and enthusiasm for continuous learning drive me to pursue opportunities where I can contribute to the digital world while learning and growing.
                </p>
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
