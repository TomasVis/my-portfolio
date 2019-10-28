//TODO
//make start positions relative to viewport
//change icon and name in browser tab not to be react default
// in git hub change description


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './Comp1';
import Orbit from './IconOrbit';
import Card from './Card';
import Shop from '../Shop';
import Animation from './Svg';
import anime from 'animejs/lib/anime.es.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import Anime from 'react-anime';
/*import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime*/

import Box from "./animejs"








class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
      startPos:[[0,0],[110,400],[180,400],[300,200],[180,200],[280,400],[180,80],[280,500],[180,600],[280,600],[80,40],[800,400],],
      cardInFocus: -1,
      firstCardDimentions:{},
      secondCardDimentions:{},
      thirdCardDimentions:{},
      mainContainerDimentions:{},
      firstIconStartPos:{},
      secondIconStartPos:{},
      thirdIconStartPos:{},
      fourthIconStartPos:{},
      windowDimentions:{width:window.innerWidth,height:window.innerHeight},

      translateX: 0,
    translateY: 0,




      isTestOnHover:false,
      testCounter: 0


    };

    this.handleResize = this.handleResize.bind(this);
    this.getIconPositions = this.getIconPositions.bind(this);
/*    this.getBoundingClientRect = this.getBoundingClientRect.bind(this);
*/    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.getIconStartPos = this.getIconStartPos.bind(this);
    this.handleTestClick = this.handleTestClick.bind(this);
    this.listenOff = this.listenOff.bind(this);
    this.listenOn = this.listenOn.bind(this);
    this.aFunction = this.aFunction.bind(this)
    this.funk = this.funk.bind(this)

    this.firstCardReff = React.createRef();
    this.secondCardReff = React.createRef();
    this.thirdCardReff = React.createRef();
    this.mainContainerReff = React.createRef();
    this.animeReff = React.createRef();
    this.objRef = React.createRef();

  }


  listenOff(){
    console.log("listenOn")
    this.setState({isTestOnHover:false})
  }
  listenOn(){
    console.log("listenOff")
    this.setState({isTestOnHover:true})
  }
  handleTestClick(){
    this.setState({
      isTestOnHover:!this.state.isTestOnHover
    })
  }
getIconStartPosNEW(){
  if(this.objRef.current){

console.log(this.getBoundingClientRect(this.objRef.current))


let x = this.getBoundingClientRect(this.objRef.current).x
let y= this.getBoundingClientRect(this.objRef.current).y

return {x:x,y:y}
 
        
}
else return {x:0,y:0}
}

  getIconStartPos(iconNum){
    const {  startPos } = this.state;
    let x = startPos[iconNum][0] >=0 ?  startPos[iconNum][0] :  this.state.mainContainerDimentions.width + startPos[iconNum][0] ;
    let y = startPos[iconNum][1] >=0 ? startPos[iconNum][1] : this.state.mainContainerDimentions.height + startPos[iconNum][1] ;
    //let y = this.state.windowDimentions.height;
//console.log(x+" "+y)
//console.log(this.state.startPos[iconNum][0] )


return {x:x,y:y}

  }

  handleMouseOver(e){

   // console.log( e.currentTarget.id)
    this.setState({isOnHover:true,cardInFocus:e.currentTarget.id})
  } 
   handleMouseLeave(e){


    this.setState({isOnHover:false,cardInFocus:-1})
  } 

  getIconPositions(iconNum){
//has to be different arrays for different number of slots for each card
    const slotsForIcons = [

    [{x:300,y:40},{x:280,y:94},{x:272,y:150},{x:280,y:203},{x:310,y:203},{x:310,y:250}],
    [{x:300,y:40},{x:280,y:94},{x:272,y:150},{x:280,y:203}],
    [{x:300,y:40},{x:280,y:94},{x:280,y:94}]
    ];// array with values to add to original card position, placing each icon to its slot

    const { cardInFocus, startPos } = this.state;
    const { width, height } = this.state.mainContainerDimentions;
    
    let val = cardInFocus==0 ? this.state.firstCardDimentions:   //determines to which location cards should flow based on which card is in focus
              cardInFocus==1 ? this.state.secondCardDimentions:
              cardInFocus==2 ? this.state.thirdCardDimentions:
              {x:0,y:0} 

    let arr = cardInFocus==0 ? [0,1,2,3,4,5]:                        // arr represents array that controlls wheather the icon should go to the card, or stay in its initial position
              cardInFocus==1 ? [2,3]:                          // each number in array represents the icon which needs to know where to go
              cardInFocus==2 ? [0,1,3]:
              [0,1,2,3]

let index=0;
let inc =0;                                                                 // this value will be incremented and added to the x value to align icons
let answ= {};
//console.log(this.state.cardInFocus)
//let arr = [[0,1,2,3],[1,3],[1,4]];

//console.log("iconNum "+iconNum)
if(!arr.includes(iconNum)){                                      // if icon number is not in the array the icon gets destination of its initial position
  //console.log("not includes "+iconNum)
    let x = startPos[iconNum][0] >= 0 ?  startPos[iconNum][0] :  width + startPos[iconNum][0] ;
    let y = startPos[iconNum][1] >= 0 ? startPos[iconNum][1] : height + startPos[iconNum][1] ;
   answ = val = {x:x,y:y} 

}
else{                                                                        // adds arbitrary number to x axis for individual icon alignment
  arr.forEach(el =>{
    if(iconNum == el){
      //console.log(slotsForIcons[index])
      //console.log("val "+val+" "+" slotsForIcons[index][iconNum] "+slotsForIcons[index])
    }
    //answ = iconNum == x ? val = {...val,x:val.x+inc} : val;
    answ = iconNum == el ? val = {x:val.x+slotsForIcons[cardInFocus!=-1?cardInFocus:0][index].x ,
     y:val.y+slotsForIcons[cardInFocus!=-1?cardInFocus:0][index].y,o:1} : val;
    //answ =  {x:val.x+slotsForIcons[iconNum][index].x , y:val.y+slotsForIcons[iconNum][index].y};
    index++;
    inc+=50;
    return answ
  })

}

   return answ

  }
  // converts boundingClient object to normal object
  getBoundingClientRect (element)  { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
    return {top, right, bottom, left, width, height, x, y} 
  }

  handleResize() {  
     /* this.setState({
        firstCardDimentions:this.getBoundingClientRect(this.firstCardReff.current),
       secondCardDimentions:this.getBoundingClientRect(this.secondCardReff.current),
        thirdCardDimentions:this.getBoundingClientRect(this.thirdCardReff.current),
        mainContainerDimentions:this.getBoundingClientRect(this.mainContainerReff.current),
        windowDimentions:{width:window.innerWidth,height:window.innerHeight}
      }) */
      if(this.firstCardReff.current){
       this.setState({
        firstCardDimentions:{x:this.firstCardReff.current.offsetLeft,y:this.firstCardReff.current.offsetTop},
       secondCardDimentions:{x:this.secondCardReff.current.offsetLeft,y:this.secondCardReff.current.offsetTop},
        thirdCardDimentions:{x:this.thirdCardReff.current.offsetLeft,y:this.thirdCardReff.current.offsetTop},
        mainContainerDimentions:{height:this.mainContainerReff.current.offsetHeight,width:this.mainContainerReff.current.offsetWidth}
/*        windowDimentions:{width:window.innerWidth,height:window.innerHeight}*/
      }) 

}
  }

  componentDidMount() {
      this.setState({
        firstCardDimentions:{x:this.firstCardReff.current.offsetLeft,y:this.firstCardReff.current.offsetTop},
       secondCardDimentions:{x:this.secondCardReff.current.offsetLeft,y:this.secondCardReff.current.offsetTop},
        thirdCardDimentions:{x:this.thirdCardReff.current.offsetLeft,y:this.thirdCardReff.current.offsetTop},
         mainContainerDimentions:{height:this.mainContainerReff.current.offsetHeight,width:this.mainContainerReff.current.offsetWidth}
/*         windowDimentions:{width:window.innerWidth,height:window.innerHeight}*/
      }) 

/*console.log(this.firstCardReff.current.offsetLeft);
console.log(this.firstCardReff.current.offsetTop);*/
    window.addEventListener('resize', this.handleResize)
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
      targets: '.orange',
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

  }



  aFunction(){
   // console.log(this.animeReff.current)


           // console.log(motionPath1)
  }
  funk(){
this.motionPath1 = anime({
      targets: '.red',

/*      rotate: path('angle'),*/
      easing:"linear",
      duration:10000,
      loop: true
    });
/* this.objRef.current.motionPath.pause()*/
  }


  render() {

    const { translateX, translateY } = this.state;





console.log(this.state.translateX)
//console.log(this.state.isOnHover)
//console.log(this.state.secondCardDimentions);
//console.log(this.state.mainContainerDimentions);
/*console.log(this.state.dimentions);


console.log(this.state.thirdCardDimentions);*/
    return (<div>

            <div className="card">

        <Box isOnHover={this.state.isOnHover} translateX={translateX} translateY={translateY} />
        <div className={this.state.isOnHover ? "wtf ":"square blue"} style={this.state.isOnHover ? {transform:"translateX(10px),translateY(10px)"}:{opacity:0.5}}>                 <Comp1  iconNr= {0} startPos={this.getIconStartPos(0)} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {100}/>
</div>
      </div>



<button onClick={this.funk}>aaaaaaaa</button>
      <div ref={this.mainContainerReff} className="mainContainer">
{/*<div className="card">
<Animation myProp={{duration:5000}}/>
</div>*/}

        <div id="anime-demo" className="card">  
          <svg style={{position:"absolute"}} width="600" height="300" ><path ref={this.animeReff}
           d="m 100 100 a 192 37 -17 1 1 28 60 a -188 -37 -17 0 1 -28 -60" stroke="black" strokeWidth= "1px" fill="none"/>
          </svg>
          <div ref={this.objRef} className="square blue"></div>

          <div  className={this.state.isOnHover ? "wtf ":"square blue"} style={this.state.isOnHover ? {transform:"translateX(10px)"}:{opacity:0.5}}>


          </div>

            <div className="square orange"></div>

            <div className="square green"></div>
        </div>




        <div 
          id={0} 
          className="wrapper"
          ref={this.firstCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card listenOn={this.listenOn} listenOff={this.listenOff} id={0}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}/>            
        </div>

       <div 
          id={1} 
          className="wrapper"
          ref={this.secondCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card listenOn={this.listenOn} listenOff={this.listenOff} id={1}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}/>            
        </div>
        
        
        <div 
          id={2} 
          className="wrapper"
          ref={this.thirdCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card listenOn={this.listenOn} listenOff={this.listenOff}   id={2}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}/> 
          
                
        </div>

       <Comp1 iconNr= {0} startPos={this.getIconStartPosNEW()} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {100}/>
       <Comp1 iconNr= {1} startPos={this.getIconStartPos(1)} destination={this.getIconPositions(1)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {200}/>
        <Comp1 iconNr= {2} startPos={this.getIconStartPos(2)} destination={this.getIconPositions(2)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {300}/>
        <Comp1 iconNr= {3} startPos={this.getIconStartPos(3)} destination={this.getIconPositions(3)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {4} startPos={this.getIconStartPos(4)} destination={this.getIconPositions(4)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {5} startPos={this.getIconStartPos(5)} destination={this.getIconPositions(5)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {6} startPos={this.getIconStartPos(6)} destination={this.getIconPositions(6)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {7} startPos={this.getIconStartPos(7)} destination={this.getIconPositions(7)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {8} startPos={this.getIconStartPos(8)} destination={this.getIconPositions(8)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {9} startPos={this.getIconStartPos(9)} destination={this.getIconPositions(9)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {10} startPos={this.getIconStartPos(10)} destination={this.getIconPositions(10)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {11} startPos={this.getIconStartPos(11)} destination={this.getIconPositions(11)} cardInFocus={this.state.cardInFocus}  isOnHover = {this.state.isOnHover} delay = {400}/>




      </div>
{/*       <div className="filler"> asdasd</div>*/}
      </div>
      
    );
  }
}

export default Projects;

