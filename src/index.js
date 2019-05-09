 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Navbar from './components/navbar';
import AddProduct from './components/addProduct';


ReactDOM.render(
  <Router>
    
    <Navbar />
      <div>
      
        <Route exact path='/' component={App} />
        <Route path='/Edit/:id' component={Edit} />
        <Route path='/Create' component={Create} />
        <Route path='/Show/:id' component={Show} />
        <Route path='/AddProduct' component={AddProduct} />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();