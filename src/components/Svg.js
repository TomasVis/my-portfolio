import React from "react";
import { useSpring, animated } from "react-spring";
//import { PatternWaves } from "@vx/pattern";

export default function Animation(props) {
function handleChange(event) {
    // Here, we invoke the callback with the new value
    console.log("aChange?")
    props.onChange(event.target.value);
  }



  const pathRef = React.useRef();
  const [loop, setLoop] = React.useState(1); 
  const localProps = useSpring({
    number: 1,
    from: { number: 0},
    reset: true,
    onRest: () => setLoop(loop => (loop % 2 === 0 ? 1 : 2)),
     config: props.myProp
  });

  const interpolate = (number) => {
  	  	//console.log(pathRef.current ?pathRef.current.getTotalLength():0)
console.log( pathRef.current)
    const pathLength = pathRef.current ? pathRef.current.getTotalLength() : 0;
    const { x, y } = pathRef.current
      ? pathRef.current.getPointAtLength(number * pathLength)
      : { x: 0, y: 0 };
     // console.log(x+"   "+y)
    return { x, y };
  };

  return (
    <>
      <svg style={{position:"absolute"}} width="448px" height="448px" viewBox="0 0 448 448">

        <path ref={pathRef} d="m 100 100 a 192 37 -17 1 1 28 60 a -188 -37 -17 0 1 -28 -60" fill="none"  stroke="#000" />
        <animated.circle
        style={{opacity:0.3}}
        onChange={handleChange}
          fill="red"
          cx={localProps.number.interpolate(number => interpolate(number).x)}
          cy={localProps.number.interpolate(number => interpolate(number).y)}
          r="20"
        />

      </svg>
    </>
  );
}