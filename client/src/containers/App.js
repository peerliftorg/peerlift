import React, { Component } from 'react';
import '../containers/App.css';
import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';


class App extends Component {

  //adding constructor from tut
  constructor(props){
    super(props);
    //now assign state, and a default value, doesnt matter if i say data
    this.state = {
      contacts: []
    };
  }
  //Users stands for state, the object waiting to get rendered
  //state = {contacts: []}
  
  //Fetch json from express backend
  componentDidMount() {
    //decide what link to use here-- doesnt matter yet-- believe this is right
    fetch('http://localhost:9000/user')
      .then(res => res.json())
      //.then(users => this.setState({ users }));
      .then((data) => {
        this.setState({ contacts: data })
        //data is storing correct
        console.log(this.state.contacts)
      })
      .catch(console.log)

  }
  render() {
  return (

    <div className = 'wrapper'> 
         <MyNavbar> </MyNavbar>

        <AddOpp></AddOpp>
        <OppBox contacts={this.state.contacts}> </OppBox> 
       
        </div>
       
    
  );
}
}
export default App;
