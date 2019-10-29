import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import React from "react";
import Comp1 from "./Comp1"
TweenOne.plugins.push(PathPlugin);

class Demo extends React.Component {
  constructor(props, ref) {
    super(props);
    this.path = `M 45 195 C 15 165 45 120 90 90 C 120 60 150 45 195 30 C 240 15 315 15 345 45 C 375 60 345 105 315 120 C 270 150 180 210 135 210 C 75 210 75 210 45 195 Z`;
    this.animation={ path: { x: this.path, y: this.path, rotate: 0 },repeat: -1,duration: 5000,ease: 'linear', }

  

  }



  componentWillReceiveProps(){
  	console.log(this)
  }

  render() {
  	
    return (
      <div style={{ position: 'relative', height: 230, width: 460, margin: '10px auto' }}>
        <TweenOne
          animation={this.animation}
          style={{ margin: 0, width: 20, height: 20, transform: 'translate(-10px, -10px)' }}
          className="code-box-shape"
          paused={this.props.isOnHover}
        >
        <Comp1 
        ref={this.ref}
	        className="icons"  
	        iconNr= {1} 
	        startPos={{x:0,y:0}} 
	        destination={this.props.destination} 
			cardInFocus={this.props.cardInFocus}  
			isOnHover = {this.props.isOnHover} 
			delay = {200}>
		</Comp1>
</TweenOne>

        <svg width="460" height="230">
          <path d={this.path} fill="none" stroke="rgba(1, 155, 240, 0.2)"/>
        </svg>
      </div>
    );
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
export default Demo