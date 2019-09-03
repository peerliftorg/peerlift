import React, {Component} from 'react'; 
import '../components/footer.css';
import rocket from '../images/rocket@4x.png';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../components/signup.js';




class Footer extends Component{
    render() {
        return (
        <div className = "Footer-wrapper">

        <SignUp></SignUp>

        <div className = "Content-wrapper">
        <Link to="/"><img className = 'rocket' src={rocket} alt=""></img> </Link>

            <div className = "Text-wrapper"> 

                <div className = "Cat-one"> 
                    <Link to = "/scholarships"> <div className = "Footer-content" id = "Scholarships">Scholarships</div> </Link>
                    <Link to = "/summerprograms"> <div className = "Footer-content" id = "SummerPrograms">Summer Programs </div> </Link>
                    <div className = "Footer-content"> <a className = "Footer-content" id = "Resources" href="https://medium.com/peerlift" target="_blank" >Resources </a> </div>
                    <div className = "Footer-content"> <a className = "Footer-content" id = "feedback" href="https://peerlift.canny.io/share" target="_blank" >Share Feedback 🙌 </a> </div>


                </div>

                
            </div>

        </div>

        <div className = "Footer-bottom-wrapper"> 
            <div className = "Footer-bottom-text">Built with ❤️ and scholarship 💰 </div>
            <div className = "Footer-bottom-contact">contact@peerlift.org </div>
        </div>

        </div>
        );
    }
  }
  
  export default Footer;