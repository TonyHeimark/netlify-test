import React from 'react';

export default () => {
  return (
    <div className="Contact page">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>Phone: +47 41788033</p>
        <p>Email: <a href="mailto:tjh@hotmail.com">Tjh@hotmail.com</a></p>
        <a href="https://www.linkedin.com/in/tony-j-heimark/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/TonyHeimark"><i class="fab fa-github-square"></i></a>
      </div>
      <div className="contact-form-container">
        <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message <textarea type="text" name="message" /></label>
          </p>
          <p>
            <button className="form-button" type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
}