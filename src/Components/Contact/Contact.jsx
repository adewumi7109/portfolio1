import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './contact.css';

function Contact() {
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Email sending
    emailjs
      .sendForm('service_mkxmbpf', 'template_cq35ibb', form.current, 'eqhQ8-Fgdp3AFWxSG')
      .then(
        (result) => {
        //   console.log(result.text);
        setSuccess("Message sent successfully!")
          form.current.reset();
          setError('');
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
      <section id='contact'>
        <form ref={form} onSubmit={sendEmail}>
          <h1>Need a driven developer to join your team? Let's talk.</h1>

          {error && <div className='error'>{error}</div>}
          {success && <div className='success'>{success}</div>}
          <input type='text' name='from_name' placeholder='Your Name' />
          <input type='email' name='user_email' placeholder='Your Email' />
          <textarea name='message' rows={7} placeholder='Message ...'></textarea>
          <input type='submit' value='Send Message' />
        </form>
        <div className='icons'>
          <a href='https://github.com/adewumi7109'>
            <FaGithubSquare className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/adewumi1/'>
            <FaLinkedin className='icon' />
          </a>
          <a href='https://twitter.com/adexcico_babao'>
            <FaTwitter className='icon' />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
