import React, {Component} from 'react'; 
import '../components/oppPage.css';
import Backdrop from '../components/backdrop.js';
import Opps from '../containers/Opps.js';
import OppBox from '../components/OppBox.js';
import ConfirmButton from '../components/confirmButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import shareButton from '../images/share@2x.png';




import { withRouter, Link, BrowserRouter as Router, Route } from 'react-router-dom';


//can I store product ID as a variable in return? 
// //This is a constructor for a component 

class OppPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: [],
            copied: false
            //id : this.props.match.params.id
        };
        this.copyToClipboard = this.copyToClipboard.bind(this);

    }


    componentDidMount() {
        //let idString = this.props.id;
        fetch('http://localhost:9000/users'+'/'+this.props.match.params.id)
          .then(res => res.json())
          .then((data) => {
            this.setState({ content: data })
          })
          .catch(console.log)
      }
      //given a URL, this copies to clipboard 
      copyToClipboard = (e) =>{
        // this.e.select();
        var url = this.props.match.url;
        // this.props.match.url.select();
        url.select();
        document.execCommand('copy');

        console.log(url);

        //e.target.focus();

      }

      

    render() {
        //console.log(idString)
        console.log(this.props)
        //console.log(this.state.content)
        // console.log(this.props.match.params.id)
        var e;
        return (

            <div className = 'wrapper'>

            <Link to = "/scholarships">
            <Backdrop/> 
            </Link>

            

             <div className = "OppPageWrapper"  >
             
             <Link to = "/scholarships">
             <div className = "mobileGoBack">Go back</div>
            </Link>
        
            <div  className = 'Title'> {this.state.content.Title}</div>
        
            <div className = 'Tags'> 
                    <div className = 'Data' id = 'Amount'> {this.state.content.DescriptionAmount}</div>
                    <div className = 'Data' id = 'Grade'>{this.state.content.Grade}</div>
            </div>
        
            <div className = 'Deadline'>{this.state.content.DescriptionDate}</div>
            <div className = 'PageText'> {this.state.content.Description} </div>
        
        
            <div className = 'Cta'> 

                    <CopyToClipboard text={"http://localhost:3000"+this.props.match.url}
                        onCopy={() => this.setState({copied: true})}>

                        <button className = 'SharePage' >
                        <img className = 'ShareButton' id = 'ShareButtonPage' src={shareButton} alt=""></img>
                        <p id = 'ShareButtonText'> Share </p>
                        </button>
                     </CopyToClipboard>
                    <a href = {this.state.content.Link} className = 'Apply' target="_blank"> Apply </a>
                    </div>
                    
                   
            </div> 
            {this.state.copied ? 
                    <React.Fragment>
                     <ConfirmButton
                     text = "Copied to clipboard"
                     visible = {false}
                     ></ConfirmButton>
                      </React.Fragment>
                     : null}
         
                     

            </div>
        );
    }
  }
  
export default OppPage;

