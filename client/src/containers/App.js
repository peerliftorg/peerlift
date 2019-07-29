import React, { Component } from 'react';
import '../containers/App.css';
import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';


class App extends Component {
  //Users stands for state, the object waiting to get rendered
  state = {users: []}
  //Fetch json from express backend
  componentDidMount() {
    //decide what link to use here-- doesnt matter yet-- believe this is right
    fetch('http://localhost:9000/user')
      .then(res => res.json())
      //.then(users => this.setState({ users }));
      .then((data) => {
        this.setState({ contacts: data })
        //appears this works, leaving to test
        console.log(data);

      })
  }
  render() {
  return (

    <div className = 'wrapper'> 
         <MyNavbar contacts={this.state.contacts}> </MyNavbar>
        <AddOpp></AddOpp>
        <OppBox></OppBox> 
    
   
        
       
        </div>
       
    
  );
}
}
export default App;
