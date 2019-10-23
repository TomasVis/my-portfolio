import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated, config } from 'react-spring'

import bootstrap from '../assets/icons/bootstrap.svg';
import css3 from '../assets/icons/css3.svg';
import github from '../assets/icons/git-hub-icon.svg';
import html5 from '../assets/icons/html5.svg';
import javascript from '../assets/icons/javascript.svg';
import jquery from '../assets/icons/jquery.png';
import mongodb from '../assets/icons/mongodb.png';
import nodejs from '../assets/icons/nodejs.svg';
import php from '../assets/icons/php.png';
import react from '../assets/icons/react.png';
import sass from '../assets/icons/sass.png';
import wordpress from '../assets/icons/wordpress.svg';


//import './styles.css'
//config: { mass: 5, tension: 350, friction: 40 }


const trans = (x, y, o) =>{ return ` translate(${x}px,${y}px)`}

// You can create keyframes for springs and trails
/*const Container = Keyframes.Spring({
  // Single props
  show: {opacity: 1},
  // Chained animations (arrays)
  showAndHide: [{opacity: 1}, {opacity: 0}],
  // Functions with side-effects with access to component props
  wiggle: async (next, cancel, ownProps) => {
    await next({x: 100, config: config.wobbly})
    await delay(1000)
    await next({x: 0, config: config.gentle})
  }
})*/
const icon = [html5 , css3,  javascript, bootstrap ,jquery ,mongodb ,nodejs ,php, react ,sass ,wordpress, github ];
const dest = [[80,100],[110,400],[180,400],[300,200]];

function Orbit(props) {

  const [val, set ] = useSpring(() => ({ xyo: [props.startPos.x,props.startPos.y,1],config: { mass: 100, tension: 580, friction: 600 }}))
//console.log(props.startPos)
useEffect(() => {
   set(props.isOnHover ?
    {xyo: [props.destination.x , props.destination.y , props.destination.o ? 1:1]} :
   	{xyo: [props.startPos.x,props.startPos.y,0.1]})
   // set(props.isOnHover?{xyo: [props.dimentions.x,props.dimentions.y,1]}:{xyo: [0,0,0.01]})
    //console.log('count changed', props.destination);
console.log(props.startPos)

}, [props.isOnHover])
useEffect(() => {

   // set(props.isOnHover?{xyo: [props.dimentions.x,props.dimentions.y,1]}:{xyo: [0,0,0.01]})
    //console.log('count changed', props.destination);
//console.log(val.x)

}, [props.startPos])
  return (
    <div className="icons"  >
      <animated.div
         style={{ transform: val.xyo.interpolate(trans)}}>
        
        <img src={icon[props.iconNr]}/>

      </animated.div>
    </div>
  )
}

export default Orbit