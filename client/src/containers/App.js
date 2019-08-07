import React, { Component } from 'react';
import '../containers/App.css';
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
  //Users stands for state, the object waiting to get rendered
  //state = {contacts: []}
  
  //Fetch json from express backend
  // componentDidMount() {
  //   fetch('http://localhost:9000/users')
  //     .then(res => res.json())
  //     .then((data) => {
  //       //data is an array, let's sort it by closest to current date
  //       data.sort(function(a,b){
  //         var currDate = new Date();
  //         //create date variables for each one
  //         var c = new Date(a.FilterDate);
  //         var d = new Date(b.FilterDate);

  //         var e = Math.abs(currDate-c);
  //         var f = Math.abs(currDate-d);
  //         return e-f;
  //       })
  //       this.setState({ contacts: data })
  //       //data is storing correct
  //       console.log(this.state.contacts)
  //     })
  //     .catch(console.log)

  // }

  render() {
  return (

    <div className = 'wrapper'> 

        <MyNavbar> </MyNavbar>
        <div className = "filter-opp-wrapper">

          <div className = "full-filter-wrapper"> 
          <Filters></Filters>
          </div>

          <div className = "add-box-wrapper"> 
          <AddOpp></AddOpp>
          <div className = "opp-box-wrapper"> 
            <OppBox> </OppBox> 
        </div>
        </div>
        </div>
        <Footer></Footer>
      </div>
  );
}
}
export default App;
