import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from '../Skill';
import { MDBContainer } from "mdb-react-ui-kit";
import Certificate from "./Certification";

export default function App() {
  return (
    <Container className='py-5'>
      <Row>
        <Col md={6} className='text-bg-dark rounded px-5'>
          <h3 className="px-5 ">Education</h3>
          <MDBContainer className="p-5">
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">BTech ECE</h5>
                <p className="text-light mb-2 fw-bold">2025 (Expected)</p>
                <p className="text-light">CICE Hub President</p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">XII</h5>
                <p className="text-light mb-2 fw-bold">2021</p>
                <p className="text-light">Grade: 89.2%</p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">X</h5>
                <p className="text-light mb-2 fw-bold">2019</p>
                <p className="text-light">
                  Grade: 90%<br/><br/>
                  Music Club Member<br/>
                  Art Club volunteer<br/>
                  School Band Member<br/>
                </p>
              </li>
            </ul>
          </MDBContainer>
        </Col>
        <Col md={6} className='text-bg-dark rounded px-5'>
          <h3 className="px-5 ">Experience</h3>
          <MDBContainer className="p-5">
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">President</h5>
                <p className="text-light mb-2 fw-bold">Present</p>
                <p className="text-light">CICE Hub, JIIT</p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">Internship</h5>
                <p className="text-light mb-2 fw-bold">June 2023-August 2023</p>
                <p className="text-light">Wizard Infoways Pvt. Ltd.</p>
              </li>
            </ul>
          </MDBContainer>
        </Col>
        <Col md={12} className='text-bg-dark'>
          <h3 className="px-5 ">Certifications</h3>
          <Certificate/>
        </Col>
        <Col md={12} className='text-bg-dark'>
          <h3 className="px-5 ">Skills</h3>
          <Progress/>
        </Col>
      </Row>
    </Container>
  );
}