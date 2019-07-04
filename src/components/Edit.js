import React from 'react';
import {Link} from 'react-router-dom';

function Edit() {
 return (
   <div>
     <p>The one that got away</p>
     <Link to='edit/3'>Item one</Link>
     <Link to='edit/13'>Item one</Link>
   </div>
 )
}

export default Edit;