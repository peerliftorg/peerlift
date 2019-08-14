import React, {Component} from 'react'; 

import MyNavbar from '../components/nav.js';
import Footer from "../components/footer";


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
          <Footer></Footer>
        
          {/* <Switch> 
              <Route exact path="/" component={Home} />
              <Route path="/scholarships" component={App} />
          </Switch> */}
       
        </div>
    );
  }
  }
  export default Home;
  