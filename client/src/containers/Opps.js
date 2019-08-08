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
      contacts: [],
      contacts_const: [],
      on: false
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
        //give constant a value
        this.setState({ contacts_const: data })
      })
      .catch(console.log)
  }

        //filter the results
        handleClick() {
        //set the state of contacts at the end
        if (!this.state.on){
            const word = "STEM";
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                //console.log(item.Tags)
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({on:!this.state.on})
        }
        else{
            this.setState({contacts:this.state.contacts_const})
            this.setState({on:!this.state.on})
        }
    }

  render() {
    //console.log("test"+this.state.contacts)
    //we want to reset value to normal
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
// class Toggle extends Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//           on: false
//         };

//         toggle = () => {
//             this.setState(
//                 {on:!this.state.on}
//             )
//         }
//          // This binding is necessary to make `this` work in the callback-- added from tut
//          //this.handleClick = this.handleClick.bind(this);
//       }

//     render(){
//         return(
//         <div> 
//         {this.state.on && <h1>test</h1>}
//         <button className = "filter-button" >Click Me </button>
//         </div>

//         );
//     }
// }



const SmartButton = ( {contacts} ) => {
    
    return(
        <button className = "filter-button" >Click Me </button>

    )
  }