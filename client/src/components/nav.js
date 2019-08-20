import React, {Component} from 'react'; 
import peerlift from '../images/peerlift@4x.png';
import menu from '../images/menu@2x.svg';
import rocket from '../images/rocket@4x.png';
import x from '../images/x@2x.svg';
//react router for routes
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App.js';
import Home from '../containers/home.js';
import Opps from '../containers/Opps.js';
import '../components/nav.css';
import MobileNav from './mobileNav';

class MyNavbar extends React.Component{

  constructor(props){
    super(props);
        this.state = {
            active: false
        };
    }
  
  handleClick(){
    this.setState({active: !this.state.active});

  }
  getImageName = () => this.state.active ? 'menu@2x.svg' : 'x@2x.svg'


  render() {
    const imageName = this.getImageName();
    console.log(imageName)

      return (
          <div className = 'Navbar'>

            <div className = "mobile-grid">
              <Link to="/"> <img className = 'logo' src={peerlift} alt=""></img> </Link>

                <img onClick={() => this.handleClick()} className = "menu" src = {imageName} ></img> 
               
            </div>

            <ul id="nav">
              <li> <Link to="/">Home</Link> </li>
              <li><a href="#">Summer Programs</a></li>
              <li> <Link to="/scholarships">Scholarships</Link> </li>
            </ul>

            {this.state.active  && 
                <MobileNav> </MobileNav>}
           
          </div>


      );
  }
}

export default MyNavbar;
