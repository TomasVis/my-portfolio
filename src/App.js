import React from 'react';

import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Projects from './components/Projects';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Demo from './components/tween';


function App() {
  return (
    <Router >
    <div>
<Nav/>
<Demo  
  //startPos={this.getIconPositions(0)} 
  destination={0}
  cardInFocus={0}
  isOnHover = {0} 
  delay = {0}
  duration = {80000}
  iconNr={4}
  iconMove={0}
/>
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/projects" component={Projects}/>
  <Route path="/about" component={About}/>
  <Route path="/shop" exact component={Shop}/>
  <Route path="/shop/:id" component={ItemDetail}/>
</Switch>
</div>
    </Router>
  );
}
const Home = () =>(
<div>
<h1>Home Page</h1>

</div>
  )
export default App;