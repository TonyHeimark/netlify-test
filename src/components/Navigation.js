import React from 'react';

export default (props) => {
  return (
    <div className={props.navStyle}>
      <ul onClick={window.innerWidth < 599 ? props.handleHamburger : undefined}>
        <li key="Home"><button className={ props.isActive === 1 ? 'Home-active first-btn last-btn' : 'first-btn'} onClick={props.handleHome}>Home</button></li>
        <li key="Portfolio"><button className={ props.isActive === 2 ? 'Portfolio-active first-btn last-btn' : ''} onClick={props.handlePortfolio}>Portfolio</button></li>
        <li key="Contact"><button className={ props.isActive === 4 ? 'Contact-active first-btn last-btn' : 'last-btn'}  onClick={props.handleContact}>Contact</button></li>
      </ul>
    </div>
  );
}