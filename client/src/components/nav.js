import React, {Component} from 'react'; 
//import Navbar from 'react-bootstrap/Navbar'
//This is a named export
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import peerlift from '../images/peerlift@4x.png';
import '../components/nav.css';

class MyNavbar extends React.Component{
  render() {
      return (
          <div className = 'Navbar'>
            <img className = 'logo' src={peerlift} alt=""></img>
            <ul id="nav">
              <li><a href="#">Resources</a></li>
              <li><a href="#">Summer Programs</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>
      );
  }
}

export default MyNavbar;

//bootstrap attempt    
/*
class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
      <img
        src= {peerlift}
        width="110px"
        height="30px"
        className="d-inline-block align-top"
        alt="Peerlift"
      />
    </Navbar.Brand>
    <Nav bsClass="mr-auto">
      <Nav.Link bsClass = "link-text" href="#scholarships">Scholarships</Nav.Link>
      <Nav.Link bsClass = "link-text" href="#summerprograms">Summer Programs</Nav.Link>
      <Nav.Link bsClass = "link-text" href="#resources">Resources</Nav.Link>
    </Nav>
  </Navbar>
        );
    }
}
*/


