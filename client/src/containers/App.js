//This file is currently a wrapper to display scholarships.  The main logic of displaying and sorting scholarships is in opps.js, while 
// this page attaches a navbar and footer, and creates routes for scholarships.

import React, { Component } from 'react';
//to use react router to set up SPA
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../containers/App.css';
import Opps from '../containers/Opps.js';
import OppPage from '../components/oppPage.js';
import Test from '../containers/test.js';
import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';
import Footer from "../components/footer";
import Filters from "../components/filters";
import Backdrop from "../components/backdrop";
import Home from "../containers/home.js";


class App extends Component {
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
        <Opps></Opps>
        <Route path = "/scholarships/:id"  
          render={(props) => <OppPage {...props} page={'scholarships'} />} /> 

        <Footer></Footer>
     
      </div>
  );
}
}
export default App;
