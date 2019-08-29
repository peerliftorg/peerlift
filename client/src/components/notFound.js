import React, {Component} from 'react'; 
import MyNavbar from '../components/nav.js';
import Footer from "../components/footer";
import '../components/notFound.css';



class Notfound extends Component {
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
         
         <div className = "wrapper-404"> 
         <div className = "title-404">Oops! 😳</div>
         <div className = "sub-404">What you’re looking for may have changed, or doesn’t exist on Peerlift.</div>
         </div>

  
          <Footer></Footer>
       
        </div>
    );
  }
  }
  
export default Notfound