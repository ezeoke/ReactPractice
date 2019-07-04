import React from 'react';
import {Link} from 'react-router-dom';

function  NotFound(){
 return  (
   <div>
     '404!' - <Link to='/'>Home Page</Link>
   </div>
 )
}

export default NotFound;