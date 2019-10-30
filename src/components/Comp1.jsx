import React, {useEffect, useRef } from 'react'
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
import extractCSS from 'component-css-extractor'


//import './styles.css'
//config: { mass: 5, tension: 350, friction: 40 }


const trans = (x, y, o) =>{ return ` translate(${x}px,${y}px)`}
const transOp = (x, y, o) =>{ return `${o}`}
const icon = [html5 , css3,  javascript, bootstrap ,jquery ,mongodb ,nodejs ,php, react ,sass ,wordpress, github ];



function Comp1(props) {
const daRef = useRef(null);

//-daRef.current.getBoundingClientRect(daRef.current).x+window.scrollX
//-daRef.current.getBoundingClientRect(daRef.current).y+window.scrollY


  const [val, set ] = useSpring(() => ({ xyo: [props.startPos.x,props.startPos.y,1],config: config.slow}))
//console.log(props)
useEffect(() => {
//console.log("bounding client "+daRef.current.getBoundingClientRect(daRef.current).y)
//console.log("window scrool "+window.scrollY)
//console.log(daRef.current.getBoundingClientRect(daRef.current).x+window.scrollX)
//console.log(props.destination.x)
//console.log("ateina is props "+props.destination.y)
let x = 0
let y = 0
props.isOnHover ? x=props.destination.x-daRef.current.getBoundingClientRect(daRef.current).x-window.scrollX:x=0;
props.isOnHover ? y=props.destination.y-daRef.current.getBoundingClientRect(daRef.current).y-window.scrollY:y=0;
//console.log(y)
  setTimeout(() => set(props.isOnHover ?
   {xyo: [x,
    y , 
    props.destination.o ? 1:1]} :
   {xyo: [props.startPos.x,props.startPos.y,1]}), props.delay)
    //console.log('count changed', props.destination);


}, [props.isOnHover])
  return (
    <div ref={daRef} className="icons "  >
      <animated.div 
     
         style={{ transform: val.xyo.interpolate(trans),opacity: val.xyo.interpolate(transOp)}}>
        
        <img src={icon[props.iconNr]}/>

      </animated.div>
    </div>
  )
}

export default Comp1
/*function Comp1(props) {

  const val = useSpring({ 
    from: { transform:`translate(${props.x}px,${props.y}px)`}, 
    to:{transform:`translate(${props.isOnHover ? 0 : props.x}px,${props.isOnHover ? 0 : props.y}px)`},
   config:config.wobbly,
   delay:props.delay

     })
//console.log(val)
  return (
    <div className="icons"  >
      <animated.div
        style={val}


        >
        
        <img src="https://mpng.pngfly.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg"/>

      </animated.div>
    </div>
  )
}*/