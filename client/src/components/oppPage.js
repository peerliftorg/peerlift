import React, {Component} from 'react'; 
import '../components/oppPage.css';

//This is a stateless component that manages an active state
const OppPage = ( {contacts} ) => {

    return(
      <div className = 'wrapper'>
  
      {contacts.map((contact) =>
      //wrapper so it doesnt break
      <div className = "OppBoxWrapper">
      <div className = 'Title'> {contact.Title}</div>
  
      <div className = 'Tags'> 
              <div className = 'Data' id = 'Amount'>{contact.DescriptionAmount}</div>
              <div className = 'Data' id = 'Grade'>{contact.Grade}</div>
      </div>
  
      <div className = 'Deadline'>{contact.DescriptionDate}</div>
      <div className = 'Text'> {contact.Description} </div>
  
  
      <div className = 'Cta'> 
              <div className = 'Share'> Share </div>
              <a href = {contact.Link} className = 'Apply' target="_blank"> Apply </a>
              </div>
      </div>
          )}
      </div>
    )
  }

  export default OppPage;
