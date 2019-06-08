import React from 'react';

export default () => {
  return (
    <div className="Contact page">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>Phone: +47 41788033</p>
        <p>Email: <a href="mailto:tony@tonyheimark.com">Tony@tonyheimark.com</a></p>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-github-square"></i></a>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
      </div>
      <div className="contact-image-container">
      <img src={require("../images/contact-me2.png")} alt="mobile version of website on a phone" />
      </div>
    </div>
  );
}