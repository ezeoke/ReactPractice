import React from 'react';

class Render extends React.Component {
 render(){
  return (
   <div>
    <li>{this.props.take}</li>
   </div>
  )
 }
}

export default Render;