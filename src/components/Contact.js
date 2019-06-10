import React from 'react';
import Form from "../components/Form";

export default () => {
  return (
    <div className="Contact page">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>Phone: +47 41788033</p>
        <p>Email: <a href="mailto:tjh@hotmail.com">Tjh@hotmail.com</a></p>
        <a href="https://www.linkedin.com/in/tony-j-heimark/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/TonyHeimark"><i className="fab fa-github-square"></i></a>
      </div>
      <div className="contact-form-container">
        <Form />
      </div>
    </div>
  );
}