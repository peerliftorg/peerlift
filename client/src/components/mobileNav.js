import React, {Component} from 'react'; 
import MyNavbar from '../components/nav.js';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../components/mobileNav.css';



class MobileNav extends React.Component{
    render() {
        return (
            <React.Fragment> 
            <div className = 'mobileNav'>
              <ul id = "mobile-list">
                <li id = "mobile-item"> <Link to="/scholarships">Scholarships</Link> </li>
                <li id = "mobile-item"> <Link to="/">Summer Programs</Link> </li>
                <li id = "mobile-item"><a href="https://medium.com/peerlift" target="_blank">Resources </a></li>
              </ul>
            </div>
            </React.Fragment>
        );
    }
  }
  
  export default MobileNav;
  