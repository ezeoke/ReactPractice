import React from 'react';            
import ListMap from './listMap';

function List(){
 const listItems = ['car', 'house', 'tree', 'billions']
  return (
    <div>
       <h3>Practice Makes perfect</h3>
    <ListMap element = {listItems}></ListMap>
    </div>
  )
}

export default List; 