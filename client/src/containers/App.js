import React, { Component } from 'react';
import '../containers/App.css';
import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';


class App extends Component {
  state = {users: []}
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
  return (

    <div className = 'wrapper'> 
        {/* <MyNavbar> </MyNavbar>
        <AddOpp></AddOpp>
        <OppBox></OppBox> */}
        
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
          )}
        </div>
    
  );
}
}

export default App;
