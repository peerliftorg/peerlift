import React, { Component } from 'react';
//to use react router to set up SPA
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import '../containers/App.css';
import Opps from '../containers/Opps.js';
import Test from '../containers/test.js';

import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';
import Footer from "../components/footer";
import Filters from "../components/filters";

//helper function that takes a substring, and checks whether a string in an array contains this substr
// function filterBySubstring(substr){
//   var tagString = contacts.Tags;
//   return tagString.includes(substr);
// }

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

    <div className = 'wrapper'> 

        <MyNavbar> </MyNavbar>
        <Opps></Opps>
        <Footer></Footer>
      </div>
  );
}
}
export default App;
