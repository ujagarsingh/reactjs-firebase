import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link, NavLink } from 'react-router-dom';
 

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }
 

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home/List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Edit">Edit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Create">Create</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/AddProduct">Add Product</NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
    );
  }
}

export default Navbar;