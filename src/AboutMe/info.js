import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';


function Info(){
    return(
        <Container>
            <Row className='mt-3'>
                <Col md = {12} className='mt-2 py-2'>
                    <h2 className='w-25 p-2'>Skills</h2>
                </Col>
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#007ced",}} />
                        </div>
                        <div className='p-2'>
                            <h4>Python</h4>
                            <p style={{color:"#b7b7b7"}}>Highly skilled in Python programming language, proficient in developing robust and scalable applications. Experienced in utilizing Python's extensive libraries and frameworks to streamline development processes and solve complex problems efficiently.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#007ced",}} />
                        </div>
                        <div className='p-2'>
                            <h4>HTML</h4>
                            <p style={{color:"#b7b7b7"}}>Experienced in HTML, proficient in writing clean and semantic markup to ensure proper structuring and accessibility of web pages. Skilled in utilizing HTML tags, attributes, and elements to create well-organized and functional web content.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#007ced",}} />
                        </div>
                        <div className='p-2'>
                            <h4>CSS</h4>
                            <p style={{color:"#b7b7b7"}}>Proficient in CSS, adept at designing and styling web elements to enhance the visual appeal and user experience. Experienced in utilizing CSS selectors, properties, and media queries to create responsive layouts and implement custom designs.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#007ced",}} />
                        </div>
                        <div className='p-2'>
                            <h4>Bootstrap</h4>
                            <p style={{color:"#b7b7b7"}}>Skilled in utilizing Bootstrap framework, proficient in leveraging its responsive grid system, pre-built components, and utility classes to create modern and mobile-friendly websites. Experienced in customizing Bootstrap elements to achieve desired design aesthetics while ensuring cross-browser compatibility.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}







export default Info;