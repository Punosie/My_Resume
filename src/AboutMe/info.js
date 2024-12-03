import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBasketballBall, faUser, faFilm } from '@fortawesome/free-solid-svg-icons';

// Corrected imports for assets (using relative paths)
import Render01 from '../Assets/img/Render01.png';
import Render02 from '../Assets/img/Render02.png'; // Additional image 1
import Render03 from '../Assets/img/Render03.png'; // Additional image 2
import Render04 from '../Assets/img/Render04.png'; // Additional image 3
import Video01 from '../Assets/Vids/Video01.mp4';
import Video02 from '../Assets/Vids/Video02.mp4';

function AboutMe() {
    return (
        <Container>
            <Row className='mt-3'>
                {/* Gaming Section */}
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faGamepad} size="2xl" style={{ color: "#007ced" }} />
                        </div>
                        <div className='p-2'>
                            <h4>Gaming</h4>
                            <p style={{ color: "#b7b7b7" }}>
                                A huge fan of competitive gaming, especially games like Valorant, where precision, strategy, and teamwork make every match exciting and challenging. I enjoy the adrenaline rush of tactical gameplay and constantly strive to improve my skills.
                            </p>
                        </div>
                    </div>
                </Col>

                {/* Blender Section */}
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "#007ced" }} />
                        </div>
                        <div className='p-2'>
                            <h4>Blender & 3D Modeling</h4>
                            <p style={{ color: "#b7b7b7" }}>
                                I love working with Blender to create 3D models and animations. Whether it's a personal project or a creative experiment, I enjoy exploring the endless possibilities of 3D design and bringing ideas to life in the virtual world.
                            </p>
                        </div>
                    </div>
                </Col>

                {/* Badminton Section */}
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faBasketballBall} size="2xl" style={{ color: "#007ced" }} />
                        </div>
                        <div className='p-2'>
                            <h4>Badminton</h4>
                            <p style={{ color: "#b7b7b7" }}>
                                Badminton is one of my favorite sports. It's a great way to stay active, have fun, and challenge myself. Whether it's playing with friends or honing my skills, badminton always brings me joy and keeps me energized.
                            </p>
                        </div>
                    </div>
                </Col>

                {/* Anime Section */}
                <Col md={6} className='mt-2 py-2'>
                    <div className='d-flex align-items-start'>
                        <div className='p-2'>
                            <FontAwesomeIcon icon={faFilm} size="2xl" style={{ color: "#007ced" }} />
                        </div>
                        <div className='p-2'>
                            <h4>Anime</h4>
                            <p style={{ color: "#b7b7b7" }}>
                                I'm an avid anime fan! I enjoy a wide variety of anime genres, from action-packed series to thought-provoking dramas. Some of my favorite anime include classics like "Jobless Reincarnation," "Attack on Titan," and "My Hero Academia." Anime inspires creativity and storytelling, and I love diving into new series.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Section Heading: Blender Works */}
            <Row className="mt-4">
                <Col md={12} className="text-center">
                    <br />
                    <h2 style={{ color: "white" }}>SOME OF MY WORKS IN BLENDER</h2>
                    <br />
                </Col>
            </Row>

            {/* Section Sub-heading for 3D Models */}
            <Row className="mt-4">
                <Col md={12} className="text-center">
                    <hr />
                    <h4 style={{ color: "white" }}>3D MODELS</h4>
                </Col>
            </Row>

            {/* Blender Cards with Image for 3D Models */}
            <Row className="mt-4 justify-content-center">
                <Col md={4} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="bg-dark text-light border-secondary">
                        <Card.Img variant="top" src={Render01} />
                        <Card.Body>
                            <Button href="https://www.instagram.com/p/DC2zFkLhUlc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" variant="outline-light" block>More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="bg-dark text-light border-secondary">
                        <Card.Img variant="top" src={Render04} />
                        <Card.Body>
                            <Button href="https://www.instagram.com/p/C_BmtIWBjro/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" variant="outline-light" block>More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="bg-dark text-light border-secondary">
                        <Card.Img variant="top" src={Render03} />
                        <Card.Body>
                            <Button href="https://www.instagram.com/p/DCIDSO4zlIc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" variant="outline-light" block>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Section Sub-heading for Animations */}
            <Row className="mt-4">
                <Col md={12} className="text-center">
                    <hr />
                    <h4 style={{ color: "white" }}>ANIMATIONS</h4>
                </Col>
            </Row>

            {/* Blender Cards with Video for Animations */}
            <Row className="mt-4 justify-content-center">
                <Col md={4} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="bg-dark text-light border-secondary">
                        <video width="100%" height="auto" controls>
                            <source src={Video01} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Card.Body>
                            <Button href="https://www.instagram.com/reel/C_SuFQchvui/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" variant="outline-light" block>More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="bg-dark text-light border-secondary">
                        <video width="100%" height="auto" controls>
                            <source src={Video02} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Card.Body>
                            <Button href="https://www.instagram.com/reel/DCZ3wcbsTp4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" variant="outline-light" block>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
