import React, {Component} from 'react'; 
import MyNavbar from '../components/nav.js';
import Footer from "../components/footer";
import '../containers/home.css';
import carmen from '../images/carmen@2x.svg';
import amel from '../images/amel@2x.svg';
import shirt from '../images/shirt@2x.svg';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


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
      <div className = 'wrapper'> 
          <MyNavbar> </MyNavbar>

          <div className = "hero-wrapper"> 
          <div className = "hero-box"> 
            <div className = "hero-title"> 💯 Scholarships and summer programs for high school. </div>
            <div className = "hero-sub"> Loved by 60,000 students.  No accounts.  Always free.</div>
            <div className = "hero-buttons">
                <button className = "hero-button" id = "hero-scholarships">Scholarships</button>
                <button className = "hero-button" id = "hero-programs">Summer programs</button>
            </div>
          </div>
          <div className = "img-grid"> 
            <img className = "img-hero" src = {carmen} />
            <img className = "img-hero" src = {amel} />
            <img className = "img-hero" src = {shirt} />
          </div>

          </div>
        
        <div className = "description">
            <div className = "description-title">Student powered</div>
            <div className = "description-text">We crowdsource quality content from students like you.   Discover and share opportunities on Peerlift. </div>


        </div>

          <Footer></Footer>
        
        
       
        </div>
    );
  }
  }
  export default Home;
  