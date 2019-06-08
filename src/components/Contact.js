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
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
}