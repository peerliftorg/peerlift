import React, {Component} from 'react'; 
import '../components/OppBox.css';


//Going to refactor
//Hardcoding scholarship data fields in rn
// class OppBox extends React.Component{
//     render() {
//         return (
//            <div className = 'OppBoxWrapper'>
//                 <div className = 'Title'> Test</div>

//                 <div className = 'Tags'> 
//                 <div className = 'Data' id = 'Amount'>$25,000</div>
//                 <div className = 'Data' id = 'Grade'>11,12</div>
//                 </div>

//                 <div className = 'Deadline'>January 15, 2019</div>
//                 <div className = 'Text'> Coca-Cola Scholars is a prestigious four-year grant of $ </div>

//                 <div className = 'Cta'> 
//                 <div className = 'Share'> Share </div>
//                 <div className = 'Apply'> Apply </div>
//                 </div>
//            </div>
//         );
//     }
//   }

  //attempt to test dynamic
//This is a constructor for a component 
const OppBox = ({ contacts }) => {
    //console.log(this.state.contacts);
    return(
      <div className = 'wrapper'>
      
      {contacts.map((contact) =>
      //wrapper so it doesnt break
      <div className = "OppBoxWrapper">
      <div className = 'Title'> {contact.firstName}</div>

      <div className = 'Tags'> 
              <div className = 'Data' id = 'Amount'>$25,000</div>
              <div className = 'Data' id = 'Grade'>11,12</div>
      </div>

      <div className = 'Deadline'>January 15, 2019</div>
      <div className = 'Text'> Coca-Cola Scholars is a prestigious four-year grant of $ </div>


      <div className = 'Cta'> 
              <div className = 'Share'> Share </div>
              <div className = 'Apply'> Apply </div>
              </div>
      
      </div>
          
          )}
      </div>

    );
}
  export default OppBox;
  

  
