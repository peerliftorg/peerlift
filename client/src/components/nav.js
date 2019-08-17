import React, {Component} from 'react'; 
import peerlift from '../images/peerlift@4x.png';
//react router for routes
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App.js';
import Home from '../containers/home.js';
import Opps from '../containers/Opps.js';
import '../components/nav.css';

class MyNavbar extends React.Component{
  render() {
      return (
          <div className = 'Navbar'>
            <img className = 'logo' src={peerlift} alt=""></img>
            <ul id="nav">
              <li> <Link to="/">Home</Link> </li>
              <li><a href="#">Summer Programs</a></li>
              <li> <Link to="/scholarships">Scholarships</Link> </li>
            </ul>
           
          </div>


      );
  }
}

export default MyNavbar;
