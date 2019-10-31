


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const stmth =0;
//console.log(ref)

const Shop = React.forwardRef((props, ref) => {
  console.log(props)
 // const { ref1, ref2 } = ref;

  return (
        <div 
          id={props.id} 
          className="wrapper"
          ref={ref}                           
          onMouseOver={props.mouseOver}          
          onMouseLeave={props.mouseLeave}          
        > 
          <Card {...props} />            
        </div>
)});


export default Shop;

/*export default React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;

  return (
    <Child1
      {...props}
      ref={ref1}
    />
    <Child2
      {...props}
      ref={ref2}
    />
  );
});*/