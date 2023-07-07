import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import submit from './Submit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';        

function ContactArea() {
  return (
    <Container>
      <Row>
        <Col md = {6} className='px-5'>
        <Col md={6} className='mt-2 py-2'>
            <div className='d-flex align-items-start'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faMobileScreen} size="xl" style={{color: "#007ced",}} />
                </div>
                <div className='p-2'>
                    <a href='tel:9560168756' style={{textDecoration:'none', color:'#fff'}}> 
                    <h5>Contact</h5>
                    <p style={{color:"#b7b7b7"}}>9560168756</p>
                    </a>
                </div>
            </div>
        </Col>
        <Col md={6} className='mt-2 py-2'>
            <div className='d-flex align-items-start'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#007ced",}} />
                </div>
                <div className='p-2'>
                    <a href='mailto:shubhankar.kaushik2003@gmail.com' style={{textDecoration:'none', color:'#fff'}}>
                    <h5>E-mail</h5>
                    <p style={{color:"#b7b7b7"}}>shubhankar.kaushik2003@gmail.com</p>
                    </a>
                </div>
            </div>
        </Col>
        <Col md={6} className='mt-2 py-2'>
            <div className='d-flex align-items-start'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faAddressBook} size="xl" style={{color: "#007ced",}} />
                </div>
                <div className='p-2'>
                    <a href='https://goo.gl/maps/acF3vCZQxEzewogA7' target='_blank' rel='noreferrer' style={{textDecoration:'none', color:'#fff'}}> 
                    <h5>Address</h5>
                    <p style={{color:"#b7b7b7"}}>River Heights Apartments, Rajnagar Extension, Ghaziabad, U.P</p>
                    </a>
                </div>
            </div>
        </Col>
        </Col>
        <Col md = {6}>
            <Form className='me-5 center-sm'>
                <Form.Group className="my-3 text-light" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder=""/>
                </Form.Group>
                <Form.Group className="my-3 text-light" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" required/>
                </Form.Group>
                <Form.Group className="my-3 text-light" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control as="textarea" rows={5} required/>
                </Form.Group>
            </Form>
            <Col md = {12} className='pe-5 my-4 pad-0'>
                <Button id='submit' as="input" className='px-4 btn_submit' type="submit" value="Submit" onClick={submit}/>
            </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactArea;