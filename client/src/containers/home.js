import React, {Component} from 'react'; 
import MyNavbar from '../components/nav.js';
import Footer from "../components/footer";
import '../containers/home.css';
import carmen from '../images/carmen@2x.png';
import amel from '../images/amel@2x.png';
import shirt from '../images/shirt@2x.png';
import menu from '../images/menu@2x.svg';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Opps from '../containers/Opps.js';



class Home extends Component {

    //adding constructor from tut
    constructor(props){
      super(props);
      //now assign state, and a default value, doesnt matter if i say data
      this.state = {
        //contacts: []
      };
    }
   
  
    render() {
    return (
      // <Router> 
      <div className = 'home-wrapper'> 
          <MyNavbar> </MyNavbar>

          <div className = "hero-wrapper"> 
          <div className = "hero-box"> 
          <div className = "hero-title-sub"> 
              <div className = "hero-title"> 💯 Scholarships and summer programs. </div>
              <div className = "hero-sub"> Your scholarship search, but human. Loved by 75,000 HS students.</div>
          </div>
            <div className = "hero-buttons">
                <Link to="/scholarships" > <button className = "hero-button" id = "hero-scholarships">Scholarships</button> </Link>
                <Link to = "/summerprograms"> <button className = "hero-button" id = "hero-programs">Summer programs</button> </Link>
            </div>
          </div>
          <div className = "img-grid"> 
            <img className = "img-hero" id = "carmen" src = {carmen} />
            <img className = "img-hero" id = "amel" src = {amel} />
            <div className = "img-caption"> With Peerlift, Amel covered her first semester's books and daily expenses. ✨</div>
            <img className = "img-hero" id = "shirt" src = {shirt} />
          </div>

          </div>
        
        <div className = "description">
            <div className = "description-title">Scholarships are people-powered. </div>
            <div className = "description-text">Students come together on Peerlift to share real, useful opportunities that shaped their lives.  Behind every application is a community that cares. 
</div>


        </div>

          <Footer></Footer>
        
        
       
        </div>
    );
  }
  }
  export default Home;
  