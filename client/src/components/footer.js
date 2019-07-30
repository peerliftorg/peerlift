import React, {Component} from 'react'; 
import '../components/footer.css';

class Footer extends Component{
    render() {
        return (
        <div className = "Footer">
        <div className = "footer-content">Scholarships</div>
        <div className = "footer-content">Summer Programs </div>
        <div className = "footer-content">Resources</div>
        <div className = "footer-content">Who we Are</div>

        <div className = "footer-bottom-text">Built with ❤️ and scholarship 💰 </div>



        </div>
        );
    }
  }
  
  export default Footer;