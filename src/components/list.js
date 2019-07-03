import React from 'react';            
import ListMap from './listMap';
import {BrowserRouter, Route} from 'react-router-dom'

function List(){
 const listItems = ['car', 'house', 'tree', 'billions']
  return (
    <div>
       <h3>Practice Makes perfect</h3>
    <ListMap element = {listItems}></ListMap>
    </div>
  )
}

function Edit(){
  return(
    <div>
      <p>The one that got away</p>
    </div>
  )
}

function LetsRoll(){
return (
  <div>
    <p>Second man</p>
  </div>
)
}

const routes = (
  <BrowserRouter>
    <Route path='/list' component={List}></Route>
    <Route path='/edit' component={Edit}></Route>     
  </BrowserRouter>
)

// export default List; 
export default routes;