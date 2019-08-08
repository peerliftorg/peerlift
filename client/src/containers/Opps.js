import React, {Component} from 'react'; 
import '../components/OppBox.css';
import Filters from "../components/filters";
import OppBox from '../components/OppBox';
import AddOpp from '../components/addOpp.js';




//need to import contacts to here

// //This is a constructor for a component 

class Opps extends Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    };
     // This binding is necessary to make `this` work in the callback-- added from tut
     this.handleClick = this.handleClick.bind(this);
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

        //filter the results
        handleClick() {
        //set the state of contacts at the end
        const word = "STEM";
        const array = this.state.contacts;
        const arrayTwo = array.filter(item => {
            //console.log(item.Tags)
            return item.Tags.includes(word);
          })
        console.log(arrayTwo)

        this.setState({contacts:arrayTwo})
    }
        //loop through each element
     
        // {array.map((item) => 
            //if this object does not contain word, then remove from array
            // need the index of this item in an array
           // index = array.indexOf({item}),
            
            // console.log({item})
            // (item.Tags.includes(word)) ? console.log("added"): array.splice(index)
            
            //console.log(item.Tags)
            //if contact.Tag does not contain the given substring, remove
            //this.state.contacts.Tags.filter(s => s.includes(word))
           
            // )}
    

       
    //     array.filter(val => {
    //     return val.Tags.includes(word);
    //   })
        //console.log(array)
        // this.setState({contacts:array})
        // }

        

    // filterMain(word){
    //   //from the array
    //   const array = this.state.contacts;
    //   console.log('this is array'+array);

    //   const filtered = array.filter(val => {
    //     return val.Tags.includes(word);
    //   })
    //   return filtered;
    // }

    

  render() {
    //console.log("test"+this.state.contacts)
    return(
        <div className = "filter-opp-wrapper">
          <div className = "full-filter-wrapper"> 
          <button onClick={this.handleClick}> </button>

          <Filters></Filters>
          </div>

          <div className = "add-box-wrapper"> 

          <AddOpp></AddOpp>
          <div className = "opp-box-wrapper"> 
        
            <OppBox contacts = {this.state.contacts}> </OppBox> 
        </div>
        </div>
        </div>
    );
}
}

export default Opps;

//test to write a button that enables filters
const SmartButton = ( {contacts} ) => {
    
    return(
        <button className = "filter-button" >Click Me </button>

    )
  }