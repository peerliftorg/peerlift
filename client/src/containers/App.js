import React from 'react';
import '../containers/App.css';
import MyNavbar from '../components/nav.js';
import AddOpp from '../components/addOpp.js';
import OppBox from '../components/OppBox';


function App() {
  return (

    <div className = 'wrapper'> 
        <MyNavbar> </MyNavbar>
        <AddOpp></AddOpp>
        <OppBox></OppBox>
        </div>

  );

}

export default App;
