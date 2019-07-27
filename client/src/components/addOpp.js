import React, {Component} from 'react'; 
import '../components/addOpp.css';

//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class AddOpp extends Component{
    render() {
        return (
            <div className = "FormContainer"> 
            <div className = "OppText">🤑 Add a scholarship </div>
            <form className = "Form">
                <input className = "FormInput" placeholder = "What's it called?">
                </input>
                <button className = "FormButton"> Add
                </button>
            </form>
            </div>
        );
    }
  }
  
  export default AddOpp;