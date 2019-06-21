import React from 'react';
import Render from './render';

function ListMap(props){
  return (
   <div>
   {props.element.map(item => <Render take = {item}/>)}
   </div>
  )
 
}

export default ListMap;