import React from "react";
import { render } from "react-dom";
import anime from "animejs";

export default class Box extends React.Component {

  componentDidMount() {
   // this.anime();
  }

  componentDidUpdate() {
   // this.anime();
  }
  componentWillReceiveProps(){
  	console.log("props on the way")
  	
  }



  anime = () => {
  	if(this.smth)  var path = anime.path(this.smth);
  	
  	//console.log(path('x'))
	//let pause = this.props.isOnHover;
  	//console.log(pause)
  	let animation = 
  	anime({
      targets: '.black',
      translateX: path('x'),
      translateY: path('y'),
      easing:"linear",
      duration:30000,
      loop: true
    });

  	if(this.props.isOnHover){
  		console.log("suveike")
//animation.pause();
  	}
    //const { translateX, translateY } = this.props;
	
}

  render() {
  	console.log(anime())
    return (<div>

                <svg style={{position:"absolute"}} width="600" height="300" >
                	<path ref={smth => (this.smth = smth)} 
                  	d="m 100 100 a 192 37 -17 1 1 28 60 a -188 -37 -17 0 1 -28 -60" stroke="black" strokeWidth= "1px" fill="none"/>
			        <div className=" black"></div>
			        <div className=" red"></div>
          		</svg>
</div>
    );
  }
}

