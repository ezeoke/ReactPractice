import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import List from '../components/list.js';
import Header from '../components/Header.js';
import LetsRoll from '../components/LetsRoll.js';
import Edit from '../components/Edit.js';
import NotFound from '../components/NotFound.js';
import EditItems from '../components/EditItems.js';

const AppRouter = () => (
  <BrowserRouter>
   <div>
     <Header></Header>
     <Switch>
      <Route path='/' component={LetsRoll} exact={true}></Route>
      <Route path='/list' component={List}></Route>
      <Route path='/edit' component={Edit} exact={true}></Route>
      <Route path='/edit/:id' component={EditItems}></Route>
      <Route  component={NotFound}></Route>
    </Switch>
   </div>
  </BrowserRouter>
)

export default AppRouter;