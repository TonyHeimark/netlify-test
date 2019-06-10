import React from 'react';
import Project from "./Project";
import { Transition, animated, config } from 'react-spring/renderprops';

export default class App extends React.Component {
 
  state = {
    item: 1,
    btnStyles: "project1-btn project-btn-general",
    ctaStyle: "project1-cta"
  }
  
  handleProjectOne = () => {
    if(this.state.item !== 1){
      this.setState(() => ({
        item: undefined,
        btnStyles: "project1-btn project-btn-general",
        ctaStyle: "project1-cta"
      }));

      this.props.handleProjectColor(1);
      
      setTimeout(() => {
        this.setState(()=> ({
          item: 1,
        }));
      }, 500);
    }
  }
  
  handleProjectTwo = () => {
    if(this.state.item !== 2){
      this.setState(() => ({
        item: undefined,
        btnStyles: "project2-btn project-btn-general",
        ctaStyle: "project2-cta"
      }));

      this.props.handleProjectColor(2);
      
      setTimeout(() => {
        this.setState(()=> ({
          item: 2,
        }));
      }, 500);
    }
  }
  
  handleProjectThree = () => {
    if(this.state.item !== 3){
      this.setState(() => ({
        item: undefined,
        btnStyles: "project3-btn project-btn-general",
        ctaStyle: "project3-cta"
      }));

      this.props.handleProjectColor(3);
      
      setTimeout(() => {
        this.setState(()=> ({
          item: 3,
        }));
      }, 500);
    }
  }

  
  render(){

    return (
      <div className="Portfolio page">
      <div>

      <Transition
        reset
        items={this.state.item}
        from={{ display: 'none', transform: 'translate3d(0,100%,0)', WebkitTransform: 'translate3d(0,100%,0)'}}
        enter={{ display: 'block', transform: 'translate3d(0,0%,0)', WebkitTransform: 'translate3d(0,0%,0)'}}
        leave={{ display: 'none', transform: 'translate3d(0,-50%,0)', WebkitTransform: 'translate3d(0,-50%,0)'}}
        config={ config.slow }
      >
      {show => show && (props => (
        <animated.div style={props}>
          <Project 
            item={this.state.item}
            ctaStyle={this.state.ctaStyle}
          />
        </animated.div>
      ))}
      </Transition>

      </div>
      <div className="projects">
      <h2>Projects</h2>
      <hr />
      <button 
        className={this.state.item === 1 ? this.state.btnStyles : ""}
        onClick={this.handleProjectOne}
      >
        {this.state.item === 1 ? <i class="far fa-eye eye-green"></i> : <i class="far fa-eye-slash eye-red"></i>
        }SpaceX - Launches
      </button>
      <button
        className={this.state.item === 2 ? this.state.btnStyles : ""}
        onClick={this.handleProjectTwo}
      >
        {this.state.item === 2 ? <i class="far fa-eye eye-green"></i> : <i class="far fa-eye-slash eye-red"></i>
        }Frontend School
      </button>
      <button
        className={this.state.item === 3 ? this.state.btnStyles : ""}
        onClick={this.handleProjectThree}
      >
      {this.state.item === 3 ? <i class="far fa-eye eye-green"></i> : <i class="far fa-eye-slash eye-red"></i>
      }UN-Students Oslo
      </button>
      </div>
      
      </div>
    );
  }
}