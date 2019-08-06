import React, {Component} from 'react'; 
import '../components/OppBox.css';

  //may need to refactor into a stateful component
//This is a constructor for a component 
const OppBox = ({ contacts }) => {
    //console.log(this.state.contacts);
  

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
      <div className = 'Text'> Coca-Cola Scholars is a prestigious four-year grant of $ </div>


      <div className = 'Cta'> 
              <div className = 'Share'> Share </div>
              <a href = {contact.Link} className = 'Apply' target="_blank"> Apply </a>
              </div>
      
      </div>
          
          )}
      </div>

    );
}
  export default OppBox;
  

