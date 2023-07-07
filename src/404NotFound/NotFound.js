import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Glitch from "./Glitch";

function Notfound()
{
    return (
    <Container className='p-auto' style={{height:"100vh"}} >
      <Row className='py-5' style={{height:'100vh'}} >
        <Col className='text-bg-dark rounded text-center py-5 d-flex justify-content-center'>
          <div className="align-self-center">
            <Glitch/>
          </div>   
        </Col>
      </Row>
    </Container>
    );
}

export default Notfound;