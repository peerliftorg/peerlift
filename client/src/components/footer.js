import React, {Component} from 'react'; 
import '../components/footer.css';
import rocket from '../images/rocket@4x.png';


class Footer extends Component{
    render() {
        return (
        <div className = "Footer-wrapper">

        <div className = "Content-wrapper">
        <img className = 'rocket' src={rocket} alt=""></img>


        <div className = "Footer-content">Scholarships</div>
        <div className = "Footer-content">Summer Programs </div>
        <div className = "Footer-content">Resources</div>
        <div className = "Footer-content">Who we Are</div>
        </div>

        <div className = "Footer-bottom-text">Built with ❤️ and scholarship 💰 </div>
        <div className = "Footer-bottom-contact">contact@peerlift.org </div>




        </div>
        );
    }
  }
  
  export default Footer;