 import React from 'react';

 function Practice(){
 let app = {
  title: 'Indecision-app',
subtitle: 'put your life in the hands of a computer',
options: ['javascript', 'dart', 'blockchain']
 }

 let template = (
   <ol>
   <li>{app.options[0]}</li>
   <li>{app.options[1]}</li>
</ol>
 )
 
  return(
     <div>
        <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 'Here are your options' : 'No options'}
      {app.options.length > 0 && template}
     </div>
  )
 }

 export default Practice