import React, {Component} from 'react'; 
import '../components/OppBox.css';
import '../components/noResults.css';

import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import shareButton from '../images/share@2x.png';


const NoResults = ( {id, title, amount, grade, date, link, description, onPress, oppId} ) => {

  return(

    <div className = 'wrapper-noR OppBox'> 
        <div className = "title-noR">No results found 😢</div>
        <div className = "sub-noR"> Try broadening your search, or add an opportunity yourself. </div>
    
     </div>
  )
}

export default NoResults;