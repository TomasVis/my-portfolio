import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import React from "react";
import Comp1 from "./Comp1";
import extractCSS from 'component-css-extractor';
import ReactDOM from 'react-dom';
TweenOne.plugins.push(PathPlugin);





class Demo extends React.Component {
  constructor(props ) {
    super(props);
    this.path = `M 45 195 C 15 165 45 120 90 90 C 120 60 150 45 195 30 C 240 15 315 15 345 45 C 375 60 345 105 315 120 C 270 150 180 210 135 210 C 75 210 75 210 45 195 Z`;
    this.animation={ path: { x: this.path, y: this.path, rotate: 0 },repeat: -1,duration: this.props.duration,ease: 'linear', }
	this.reff = React.createRef();
  

  }

/*componentDidMount(){
	        const styles = getComputedStyle(this.reff.current)

        console.log(styles.color) // rgb(0, 0, 0)
        //console.log(styles) 
}*/

  componentWillReceiveProps(){
  	//console.log(this.ref)
console.log((this.props.isOnHover+" "+this.props.iconMove))
  //console.log(getTranslate(this.reff.current))

if(this.reff.current){
	//console.log(this.reff.current)
	//const styles = extractCSS(this.reff);
	//console.log(styles)
}


        
}
  

  render() {
  	
//this.getStyle()
  	//console.log(this.reff.current)
    return (
      <div  style={{ position: 'absolute', height: 230, width: 460}}>
        <TweenOne 
          animation={this.animation}
          style={{ margin: 0, width: 20, height: 20, transform: 'translate(0px, 0px)' }}
          className="code-box-shape"
          paused={this.props.isOnHover&&this.props.iconMove}
        >

        <Comp1 
        	
	        className="icons"  
	        iconNr= {this.props.iconNr} 
	        startPos={{x:0,y:0}} 
	        destination={this.props.destination} 
			cardInFocus={this.props.cardInFocus}  
			isOnHover = {this.props.isOnHover} 
			delay = {this.props.delay}
      iconMove = {this.props.iconMove}
      >
		</Comp1>


</TweenOne>

        <svg width="460" height="230">
          <path d={this.path} fill="none" stroke="rgba(1, 155, 240, 0)" />
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