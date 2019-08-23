import React, {Component} from 'react'; 
import '../components/OppBox.css';
import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import shareButton from '../images/share@2x.png';


const OppBox = ( {id, title, amount, grade, date, link, description, onPress, oppId} ) => {

  return(

    <div className = 'wrapper'>

    <button className = "OppBox" onClick={onPress} oppId = {id}>
    
    <div  className = 'Title'> {title}</div>

    <div className = 'Tags'> 
            <div className = 'Data' id = 'Amount'> {amount}</div>
            <div className = 'Data' id = 'Grade'>{grade}</div>
    </div>

    <div className = 'Deadline'>{date}</div>
    <div className = 'Text'> {description} </div>


    <div className = 'Cta'> 
            <img className = 'ShareButton' src={shareButton} alt=""></img>
            <div className = 'Share'> Share </div>
            <a href = {link} className = 'Apply' target="_blank"> Apply </a>
            </div>

    </button>
    </div>
  )
}

export default OppBox;



