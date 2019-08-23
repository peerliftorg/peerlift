//This stateful react component uses two props:  match.url from React router to generate unique URLs for each opppage,
// and page, which defines whether exiting the button should lead to scholarships or summer programs.
//  Given an ID of an opportunity, this component fetches the accompanying data, and displays it in a modal box that appears onClick from 
// Opps.JS or summer.js. 

import React, {Component} from 'react'; 
import '../components/oppPage.css';
import Backdrop from '../components/backdrop.js';
import Opps from '../containers/Opps.js';
import OppBox from '../components/OppBox.js';
import ConfirmButton from '../components/confirmButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import shareButton from '../images/share@2x.png';
import { withRouter, page, Link, BrowserRouter as Router, Route } from 'react-router-dom';


class OppPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: [],
            copied: false
            //id : this.props.match.params.id
        };
    }

    componentDidMount() {
        //let idString = this.props.id;
        fetch('http://localhost:9000' + this.props.match.url)
          .then(res => res.json())
          .then((data) => {
            this.setState({ content: data })
          })
          .catch(console.log)
      }
 
    render() {
        //console.log(idString)
        //console.log(this.props.page)
        //console.log(this.state.content)
        // console.log(this.props.match.params.id)
        var e;
        return (

            <div className = 'wrapper'>

            <Link to = {"/" + this.props.page}>
            <Backdrop/> 
            </Link>

             <div className = "OppPageWrapper"  >
             
             <Link to = {"/" + this.props.page}>
             <div className = "mobileGoBack">Go back</div>
            </Link>
        
            <div  className = 'Title'> {this.state.content.Title}</div>
            {/* Amount is conditionally rendered depending on the value of props.page to display amount, or financial aid.*/}
            <div className = 'Tags'> 
                    <div className = 'Data' id = 'Amount'> {
                        this.props.page == "scholarships" ? this.state.content.DescriptionAmount: this.state.content.FinancialAid}
                        </div>
                    <div className = 'Data' id = 'Grade'>{this.state.content.Grade}</div>
            </div>
        
            <div className = 'Deadline'>{this.state.content.DescriptionDate}</div>
            <div className = 'PageText'> {this.state.content.Description} </div>
        
        
            <div className = 'CtaPage'> 
                    {/* Code below enables users to copy to clipboard, and view a confirmation button that appears.*/}

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

