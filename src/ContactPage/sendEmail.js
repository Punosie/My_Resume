import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ContactUs = () => {
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_09auupn', 'template_ygiv9fe', form.current, 'mXmZCgjaDpApG796A')
      .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setIsSent(true);
        resetForm();
      })
      .catch((error) => {
        console.log(error.text);
        setIsSending(false);
      });
  };

  const resetForm = () => {
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageInputRef.current.value = '';
  };

  return (
    <>
      <Form className=' ms-auto me-auto center-sm' ref={form} onSubmit={sendEmail}>
        <Form.Group className="my-3 text-light">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" ref={nameInputRef} placeholder="" />
        </Form.Group>
        <Form.Group className="my-3 text-light">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" ref={emailInputRef} placeholder="" />
        </Form.Group>
        <Form.Group className="my-3 text-light">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" name="message" rows={5} required ref={messageInputRef} />
        </Form.Group>
      </Form>

      <Col md={12} className='p-0 my-4 pad-0'>
        <Button
          id='submit'
          as="input"
          className='px-4 btn_submit'
          type="submit"
          value="Send"
          disabled={isSending}
          onClick={sendEmail}
        />
      </Col>

      {isSent && <p>Email sent successfully!</p>}
    </>
  );
};
