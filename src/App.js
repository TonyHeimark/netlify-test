import React from 'react';
import './styles/App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Transition, animated, config } from 'react-spring/renderprops';



export default class App extends React.Component {

  state = {
    page: Home,
    bgClass: "home-background background",
    item: 1,
    id: 1,
    navStyle: "Navigation nav-hide"
  };

  handleHome = () => {
    if (this.state.page !== Home){
      this.setState(()=> ({
        bgClass: "home-background background",
        page: undefined,
        id: 1
      }));
  
      setTimeout(() => {
        this.setState(()=> ({
          page: Home,
          item: 1
        }));
      }, 500);
    } 
  }
  
  handlePortfolio = () => {
    if (this.state.page !== Portfolio){
      this.setState(()=> ({
        bgClass: "portfolio-background background",
        page: undefined,
        id: 2
      }));

      setTimeout(() => {
        this.setState(()=> ({
          page: Portfolio,
          item: 2
        }));
      }, 500);
    }
  }

  handleContact = () => {
    if (this.state.page !== Contact){
      this.setState(()=> ({
        bgClass: "contact-background background",
        page: undefined,
        id: 4
      }));
  
      setTimeout(() => {
        this.setState(()=> ({
          page: Contact,
          item: 4
        }));
      }, 500);
    }
  }

  handleProjectColor = (item) => {
    if(item === 1){
      this.setState(() => ({
        bgClass: "portfolio-background background"
      }))
    } else if(item === 2){
      this.setState(() => ({
        bgClass: "project2-background background"
      }))
    } else if(item === 3){
      this.setState(() => ({
        bgClass: "project3-background background"
      }))
    }
  }

  handleHamburger = () => {
    if (this.state.navStyle === "Navigation nav-show"){
      setTimeout(() => {
        this.setState(() => ({
          navStyle: "Navigation nav-fade"
          }))
      }, 50)
      setTimeout(() => {
        this.setState(() => ({
          navStyle: "Navgiation nav-hide"
        }))
      }, 400);
    } else {
      this.setState(() => ({
        navStyle: "Navigation nav-show"
      }))
    }
  }
  

  render() {
    return (
      <div className={this.state.bgClass}>
      <div onClick={this.handleHamburger} className={ this.state.navStyle === "Navigation nav-show" ? "change hamburger" : "hamburger"}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <Navigation
        navStyle={this.state.navStyle}
        isActive={this.state.id}
        handleHome={this.handleHome}
        handlePortfolio={this.handlePortfolio}
        handleContact={this.handleContact}
        handleHamburger={this.handleHamburger}
      />
      <Transition
        reset
        items={this.state.item}
        from={{ display: 'none', opacity: 1, transform: 'translate3d(0,100%,0)'}}
        enter={{ display: 'block', opacity: 1, transform: 'translate3d(0,0%,0)'}}
        leave={{ display: 'none', opacity: 1 ,  transform: 'translate3d(0,-50%,0)'}}
        config={ config.slow }
      >
      {show => show && (props => (
        <animated.div style={props}>
        {this.state.page ? <this.state.page handlePortfolio={this.handlePortfolio} handleProjectColor={this.handleProjectColor}/> : undefined}
        
        </animated.div>
      ))}
      </Transition>
    </div>
    );
  }
}
