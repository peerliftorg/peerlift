import React, {Component} from 'react'; 
import '../components/OppBox.css';

//need to import contacts to here

// //This is a constructor for a component 
class OppBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/users')
      .then(res => res.json())
      .then((data) => {
        //data is an array, let's sort it by closest to current date
        data.sort(function(a,b){
          var currDate = new Date();
          //create date variables for each one
          var c = new Date(a.FilterDate);
          var d = new Date(b.FilterDate);

          var e = Math.abs(currDate-c);
          var f = Math.abs(currDate-d);
          return e-f;
        })
        this.setState({ contacts: data })
        //data is storing correct
        //console.log(this.state.contacts)
      })
      .catch(console.log)
  }
 


  render() {
    // const box = ({contacts}) => {
    //   console.log(this.state.contacts)
    // }
   


    return(
      
      <div className = 'wrapper'>

      {this.state.contacts.map((contact) =>
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
}

export default OppBox;



