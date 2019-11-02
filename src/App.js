import React from 'react';

import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Projects from './components/Projects';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Demo from './components/tween';
import Cards from './components/cards';











class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
//      startPos:[[0,0],[110,400],[180,400],[300,200],[180,200],[280,400],[180,80],[280,500],[180,600],[280,600],[80,40],[800,400],],
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
 //   this.getIconStartPos = this.getIconStartPos.bind(this);
    this.handleTestClick = this.handleTestClick.bind(this);
    this.listenOff = this.listenOff.bind(this);
    this.listenOn = this.listenOn.bind(this);
    this.iconMove = this.iconMove.bind(this);
    this.handleScroll = this.handleScroll.bind(this);



    this.firstCardReff = React.createRef();
    this.secondCardReff = React.createRef();
    this.thirdCardReff = React.createRef();
    this.mainContainerReff = React.createRef();
    this.animeReff = React.createRef();
    this.objRef = React.createRef();
    const ref = React.createRef();

  }
  handleScroll(){
    console.log("scroll")
    
if(this.firstCardReff.current){

this.setState({
  firstCardDimentions:
        {
          x:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).x-window.scrollX,
          y:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).y-window.scrollY
        },
})
}

    if(this.secondCardReff.current){
      this.setState({
        
        
       secondCardDimentions:
       {
        x:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).x-window.scrollX,
        y:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).y-window.scrollY
      },
        thirdCardDimentions:
        {
        x:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).x-window.scrollX,
        y:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).y-window.scrollY
        },
         mainContainerDimentions:
         {
        x:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).x-window.scrollX,
        y:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).y-window.scrollY
        }

      }) 
}
  }

  iconMove(iconNum){

     let arr = this.state.cardInFocus==0 ? [0,1,2,3,4,5]:                        // arr represents array that controlls wheather the icon should go to the card, or stay in its initial position
              this.state.cardInFocus==1 ? [0,2,3]:                          // each number in array represents the icon which needs to know where to go
              this.state.cardInFocus==2 ? [0,1,3]:
              []
    if(arr.includes(iconNum)){ 
      console.log("ret true")
      return true

    }  
    else return false                                   // if icon number is not in the array the icon gets destination of its initial position 



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
              cardInFocus==1 ? [0,2,3]:                          // each number in array represents the icon which needs to know where to go
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
/*    let x = startPos[iconNum][0] >= 0 ?  startPos[iconNum][0] :  width + startPos[iconNum][0] ;
    let y = startPos[iconNum][1] >= 0 ? startPos[iconNum][1] : height + startPos[iconNum][1] ;*/
   answ = val = {x:0,y:0} 

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

if(this.firstCardReff.current){

this.setState({
  firstCardDimentions:
        {
          x:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).x-window.scrollX,
          y:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).y-window.scrollY
        },
})
}

    if(this.secondCardReff.current){
      this.setState({
        
        
       secondCardDimentions:
       {
        x:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).x-window.scrollX,
        y:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).y-window.scrollY
      },
        thirdCardDimentions:
        {
        x:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).x-window.scrollX,
        y:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).y-window.scrollY
        },
         mainContainerDimentions:
         {
        x:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).x-window.scrollX,
        y:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).y-window.scrollY
        }

      }) 
}
  }

  componentDidMount() {
if(this.firstCardReff.current){

this.setState({
  firstCardDimentions:
        {
          x:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).x-window.scrollX,
          y:this.firstCardReff.current.getBoundingClientRect(this.firstCardReff.current).y-window.scrollY
        },
})
}

    if(this.secondCardReff.current){
      this.setState({
        
        
       secondCardDimentions:
       {
        x:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).x-window.scrollX,
        y:this.secondCardReff.current.getBoundingClientRect(this.secondCardReff.current).y-window.scrollY
      },
        thirdCardDimentions:
        {
        x:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).x-window.scrollX,
        y:this.thirdCardReff.current.getBoundingClientRect(this.thirdCardReff.current).y-window.scrollY
        },
         mainContainerDimentions:
         {
        x:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).x-window.scrollX,
        y:this.mainContainerReff.current.getBoundingClientRect(this.mainContainerReff.current).y-window.scrollY
        }

      }) 
}

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);


  }






  render() {
    console.log(this.state.isOnHover)

    return (<div>


      <div ref={this.mainContainerReff} className="mainContainer">

          <Router >
    <div>
<Nav/>
<Cards ref={this.firstCardReff} id={0} someProp="a" mouseLeave={this.handleMouseLeave}   mouseOver={this.handleMouseOver}
listenOn={this.listenOn} listenOff={this.listenOff} id={0}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}
/>
<Cards ref={this.secondCardReff} id={1} someProp="a" mouseLeave={this.handleMouseLeave}   mouseOver={this.handleMouseOver}
listenOn={this.listenOn} listenOff={this.listenOff} id={1}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}
/>
<Cards ref={this.thirdCardReff} id={2} someProp="a" mouseLeave={this.handleMouseLeave}   mouseOver={this.handleMouseOver}
listenOn={this.listenOn} listenOff={this.listenOff} id={2}  cardInFocus={this.state.cardInFocus} isOnHover = {this.state.isOnHover} isTestOnHover = {this.state.isTestOnHover}
/>
<div style={{position:"fixed",top:0, right:0,margin: "30px",width:"460px",height:"230px"}}>

<Demo  
  //startPos={this.getIconPositions(2)} 
  destination={this.getIconPositions(0)}
  cardInFocus={this.state.cardInFocus}
  isOnHover = {this.state.isOnHover} 
  delay = {300}
  duration = {50000}
  iconNr={0}
  iconMove={this.iconMove(0)}
/>
<Demo  
  //startPos={this.getIconPositions(0)} 
  destination={this.getIconPositions(1)}
  cardInFocus={this.state.cardInFocus}
  isOnHover = {this.state.isOnHover} 
  delay = {0}
  duration = {30000}
  iconNr={1}
  iconMove={this.iconMove(1)}
/>
<Demo  
  //startPos={this.getIconPositions(0)} 
  destination={this.getIconPositions(2)}
  cardInFocus={this.state.cardInFocus}
  isOnHover = {this.state.isOnHover} 
  delay = {0}
  duration = {100000}
  iconNr={2}
  iconMove={this.iconMove(2)}
/>
<Demo  
  //startPos={this.getIconPositions(0)} 
  destination={this.getIconPositions(3)}
  cardInFocus={this.state.cardInFocus}
  isOnHover = {this.state.isOnHover} 
  delay = {0}
  duration = {10000}
  iconNr={3}
  iconMove={this.iconMove(3)}
/>
<Demo  
  //startPos={this.getIconPositions(0)} 
  destination={this.getIconPositions(4)}
  cardInFocus={this.state.cardInFocus}
  isOnHover = {this.state.isOnHover} 
  delay = {0}
  duration = {80000}
  iconNr={4}
  iconMove={this.iconMove(4)}
/>

</div>

<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/projects" component={Projects}/>
  <Route path="/about" component={About}/>  <Route path="/shop" exact component={Shop}/>
  <Route
  path="/shop"
  render={(props,ref) => <Shop someProp="a"  ref={this.firstCardReff} 
/>}
/>
  <Route path="/shop/:id" component={ItemDetail}/>
</Switch>
</div>
    </Router>







      </div>

      </div>
      
    );
  }
}





















const Home = () =>(
<div>
<h1>Home Page</h1>

</div>
  )
export default App;