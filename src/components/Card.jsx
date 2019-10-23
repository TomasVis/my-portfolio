import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import shortenerImg from '../assets/urlShortener.png';
import calculator from '../assets/Calculator.png';
/*import '../cssFiles/Card.css'*/
  //background-image: url(./assets/card-with-slots-and-github.png);

let images = [shortenerImg,calculator,calculator];

function Card(props) {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [vale, sete] = useSpring(() => ({ scale: 1,radius:50, config: { mass: 5, tension: 350, friction: 40 } }))
 // console.log("from card "+ props.id+" "+  props.cardInFocus)
 // console.log(props.id==props.cardInFocus)

  useEffect(() => {
    set(props.isOnHover&&props.id==props.cardInFocus?{ scale: 1.1 }:{ scale: 1 })
    //console.log('count changed', props.isOnHover);

}, [props.isOnHover])

    useEffect(() => {
    sete(props.isTestOnHover&&props.id==props.cardInFocus?{ scale: 2.2, radius:0 }:{ scale: 1,radius:50 })
    //console.log('count changed', props.isOnHover);

}, [props.isTestOnHover])
  return (
    <animated.div
    
      className="card"

      style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`}) }}
    >


{/*   <button id="cardChild"  className = "button">aaaa</button>*/}
   <a href="#"><animated.div  style={{
    backgroundImage: "url(" + images[props.id] + ")", 
    transform: vale.scale.interpolate((s) =>{ return ` scale(${s})`}),
    borderRadius: vale.radius.interpolate((s) =>{return `${s}%`})
    }}
          className="diskas" 
          onMouseOver={props.listenOn}          
          onMouseLeave={props.listenOff}  
        >
        </animated.div></a>

    <div id="cardChild" className="decorationalWindow"></div>
    </animated.div>
  )
}

export default Card;
