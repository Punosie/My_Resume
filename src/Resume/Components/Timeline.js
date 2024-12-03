import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // If needed for extra buttons
import Progress from '../Skill';
import { MDBContainer } from "mdb-react-ui-kit";
import Certificate from "./Certification";
import '../../Assets/Css/index.css';

export default function App() {
  return (
    <Container className='py-5'>
      <Row>
        {/* Education Section */}
        <Col md={6} className='text-bg-dark rounded px-5'>
          <h3 className="px-5 ">Education</h3>
          <MDBContainer className="p-5">
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">B. Tech ECE</h5>
                <p className="text-light mb-2 fw-bold">Oct 2021 - Jul 2025 (Expected)</p>
                <p className="text-light">Jaypee Institute of Information Technology, Noida</p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">XII (PCM with Computer Science)</h5>
                <p className="text-light mb-2 fw-bold">Aug 2019 - Jul 2021</p>
                <p className="text-light">Delhi Public School, Rajnagar, Ghaziabad<br />Grade: 89.2%</p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">High School </h5>
                <p className="text-light mb-2 fw-bold">March 2018 - Jul 2019</p>
                <p className="text-light">Silver Line Prestige School, Ghaziabad<br />Grade: 90%</p>
              </li>
            </ul>
          </MDBContainer>
        </Col>

        {/* Experience Section */}
        <Col md={6} className='text-bg-dark rounded px-5'>
          <h3 className="px-5 ">Experience</h3>
          <MDBContainer className="p-5">
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">SDE Intern</h5>
                <p className="text-light mb-2 fw-bold">May 2024 - Present</p>
                <p className="text-light">Orangewood, Noida</p>
                <ul className="text-light">
                  <li>Developed an interactive 3D product configurator using Three.js and React.js.</li>
                  <li>Optimized object tracking using YOLOv8 and Aruco Markers on a 6-DOF robotic platform.</li>
                  <li>Integrated roboGPT LLM to enhance robotic capabilities with AI.</li>
                  <li>Containerized software with Docker, improving setup efficiency by 50%.</li>
                </ul>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">Full Stack Developer Intern</h5>
                <p className="text-light mb-2 fw-bold">Jun 2023 - Jul 2023</p>
                <p className="text-light">Wizard Infoways Pvt. Ltd., Noida</p>
                <ul className="text-light">
                  <li>Updated and maintained WordPress websites.</li>
                  <li>Developed a custom API with Django for React.js integration.</li>
                  <li>Implemented responsive designs for cross-device compatibility.</li>
                </ul>
              </li>
            </ul>
          </MDBContainer>
        </Col>

        {/* Projects Section */}
        <Col md={12} className='text-bg-dark'>
          <h3 className="px-5">Projects</h3>
          <MDBContainer className="p-5">
            <Row className="g-4">
              {/* Project 1 */}
              <Col md={4}>
                <Card className="text-bg-dark border-secondary h-100 project-card">
                  <Card.Body>
                    <Card.Title>Text Editor</Card.Title>
                    <Card.Text>
                      A Python Tkinter-based text editor with core features like save, find, and open.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <a
                      href="https://github.com/Punosie/Notepad.py"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success btn-sm"
                    >
                      GitHub
                    </a>
                  </Card.Footer>
                </Card>
              </Col>

              {/* Project 2 */}
              <Col md={4}>
                <Card className="text-bg-dark border-secondary h-100 project-card">
                  <Card.Body>
                    <Card.Title>DhanMantri</Card.Title>
                    <Card.Text>
                      A MERN stack app for financial data visualization using Yahoo Finance data.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between text-center">
                    <a
                      href="https://github.com/Punosie/DhanMantri"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success btn-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://dhanmantri.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Live Preview
                    </a>
                  </Card.Footer>
                </Card>
              </Col>

              {/* Project 3 */}
              <Col md={4}>
                <Card className="text-bg-dark border-secondary h-100 project-card">
                  <Card.Body>
                    <Card.Title>TrackIt</Card.Title>
                    <Card.Text>
                      A full-stack web app for managing income and expenses efficiently.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <a
                      href="https://github.com/Punosie/TrackIt"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success btn-sm"
                    >
                      GitHub
                    </a>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </MDBContainer>
        </Col>

        {/* Skills Section */}
        <Col md={12} className='text-bg-dark'>
          <h3 className="px-5 ">Skills</h3>
          <Progress />
        </Col>

        {/* Certifications Section */}
        <Col md={12} className='text-bg-dark'>
          <h3 className="px-5 ">Certifications</h3>
          <Certificate />
        </Col>
      </Row>
    </Container>
  );
}
