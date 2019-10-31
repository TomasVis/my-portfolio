


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const stmth =0;
console.log()

const Cards = React.forwardRef((props, ref) => (

  //console.log(props)
        <div 
          id={props.id} 
          className="wrapper"
          ref={ref}                           
          onMouseOver={props.mouseOver}          
          onMouseLeave={props.mouseLeave}          
        > 
          <Card {...props} />            
        </div>
));


export default Cards;

