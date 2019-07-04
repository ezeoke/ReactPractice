import React from 'react';

function EditItems(props) {
 return (
   <div>
     <p>The one that stayed away</p>
     <p>this is the id with {props.match.params.id}</p>
   </div>
 )
}

export default EditItems;  