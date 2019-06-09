import React from 'react';

export default (props) => {
  return (
    <div className="Home page">
        <div>
            <h1>Hi, I'm Tony</h1>
            <p>A Front end developer based in Oslo</p>
            <button className="cta-btn" onClick={props.handlePortfolio}>Check out my work!</button>
        </div>
        <div>
            <img src={require("../images/profilbilde-min.png")} alt="of Tony Heimark" />
        </div>
    </div>
  );
}