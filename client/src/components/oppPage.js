import React, {Component} from 'react'; 
import '../components/oppPage.css';
import Backdrop from '../components/backdrop.js';
import Opps from '../containers/Opps.js';
import OppBox from '../components/OppBox.js';


import { withRouter, Link, BrowserRouter as Router, Route } from 'react-router-dom';


//can I store product ID as a variable in return? 
// //This is a constructor for a component 

class OppPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: [],
            //id : this.props.match.params.id
        };
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

    render() {
        //console.log(idString)
        console.log("hey")
        //console.log(this.state.content)
        // console.log(this.props.match.params.id)

        return (

            <div className = 'wrapper'>

            <Link to = "/scholarships">
            <Backdrop/> 
            </Link>

             <div className = "OppPageWrapper"  >
            
        
            <div  className = 'Title'> {this.state.content.Title}</div>
        
            <div className = 'Tags'> 
                    <div className = 'Data' id = 'Amount'> {this.state.content.DescriptionAmount}</div>
                    <div className = 'Data' id = 'Grade'>{this.state.content.Grade}</div>
            </div>
        
            <div className = 'Deadline'>{this.state.content.DescriptionDate}</div>
            <div className = 'Text'> {this.state.content.Description} </div>
        
        
            <div className = 'Cta'> 
                    <div className = 'Share'> Share </div>
                    <a href = {this.state.content.Link} className = 'Apply' target="_blank"> Apply </a>
                    </div>
                    
        
            </div> 
            </div>
        );
    }
  }
  
export default OppPage;
