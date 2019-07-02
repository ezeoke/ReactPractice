import React from 'react';

class BuildIt extends React.Component{
state ={
 count: 'show details'
}

 render(){
const onBtnClick = () => {
 if(this.state.count === 'show details'){
  this.setState({count: 'hide details'})
 }else{
  this.setState({count: 'show details'})
 }
}
 
 return (
  <div>
   <h1>Visibility Toggle</h1>

<button onClick={onBtnClick}>{this.state.count}</button>
  {this.state.count === 'hide details' && <p>Yes. We won</p>}
  </div>
 )
}}

export default BuildIt;