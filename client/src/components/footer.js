import React, {Component} from 'react'; 
import '../components/footer.css';
import rocket from '../images/rocket@4x.png';


class Footer extends Component{
    render() {
        return (
        <div className = "Footer-wrapper">

        <div className = "Content-wrapper">
            <img className = 'rocket' src={rocket} alt=""></img>

            <div className = "Text-wrapper"> 

                <div className = "Cat-one"> 
                    <div className = "Footer-content" id = "Scholarships">Scholarships</div>
                    <div className = "Footer-content" id = "SummerPrograms">Summer Programs </div>
                </div>

                <div className = "Cat-two"> 
                    <div className = "Footer-content" id = "Resources">Resources</div>
                    <div className = "Footer-content" id = "Who">Who We Are</div>
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