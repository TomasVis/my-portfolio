import React, { Component } from 'react';
import { Spring  } from 'react-spring/renderprops';
import anime from 'animejs/lib/anime.es.js';


class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover:false
    };
        this.animeReff = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.aFunction = this.aFunction.bind(this)
  }
  handleMouseEnter(){
    this.setState({isHover:!this.state.isHover})
  }

  aFunction(){
   // console.log(this.animeReff.current)
    var path = anime.path(this.animeReff.current);

    var motionPath = anime({
      targets: '.blue',
      translateX: path('x'),
      translateY: path('y'),
/*      rotate: path('angle'),*/
      easing:"linear",
      duration:50000,
      loop: true
    });
    var motionPath1 = anime({
      targets: '.red',
      translateX: path('x'),
      translateY: path('y'),
/*      rotate: path('angle'),*/
      easing:"linear",
      duration:10000,
      loop: true
    });
        var motionPath2 = anime({
      targets: '.orange',
      translateX: path('x'),
      translateY: path('y'),
/*      rotate: path('angle'),*/
      easing:"linear",
      duration:30000,
      loop: true
    });
            var motionPath3 = anime({
      targets: '.green',
      translateX: path('x'),
      translateY: path('y'),
/*      rotate: path('angle'),*/
      easing:"linear",
      duration:20000,
      loop: true
    });
            console.log(motionPath1)
  }

  render() {
    return (<div style={{position:"absolute"}}>
      <div style={{position:"absolute",top:80,left:120,width:"80px",height:"80px",backgroundColor:"red",borderRadius: "50%",zIndex:100}}></div>

<div id="anime-demo" >
  
<svg style={{position:"absolute"}} width="600" height="300" ><path ref={this.animeReff}
 d="m 154 97 a 148 32 -30 0 0 26 68 a -148 -32 -30 0 0 -26 -68" stroke="black" strokeWidth= "1px" fill="none"/>
</svg>


  <div className="square blue"></div>
 <div className="square red"></div>
   <div className="square orange"></div>
  <div className="square green"></div>
</div>

{/*<div className="color-codes">
  <p><span className="box blue"></span> : Linear</p>
  <p><span className="box red"></span> : easeInCubic</p>
  <p><span className="box orange"></span> : easeOutCubic</p>
  <p><span className="box green"></span> : easeInOutCubic</p>
</div>*/}
<button style={{position:"relative",top:400}} onClick={this.aFunction} > aaaa</button >


    </div>



    );
  }
}

export default Shop;
