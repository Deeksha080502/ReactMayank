import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Productlist from './component/Productlist';

import Cart from './component/Cart';
import Detail from './component/Detail';
import Default from './component/Default';

//import Addjson from './component/Addjson';

const store = createStore(
  reducer,
  window.devToolsExtension ? window.devToolsExtension():undefined)

function App() {


  return (

    <React.Fragment>

      <Provider store={store}>

      <Switch>

        <Route exact path="/" component={Productlist}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/cart" component={Cart}></Route>

        <Route component={Default}></Route>
      

      </Switch>

      </Provider>



    </React.Fragment>
  );
}

export default App;
