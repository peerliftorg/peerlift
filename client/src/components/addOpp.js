import React, {Component} from 'react'; 
import '../components/addOpp.css';

//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class AddOpp extends Component{

    constructor(props){
        super(props);
            this.state = {
                name: ""
            };
        }
    changeHandler = e => {
        this.setState({name: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Name": this.state.name
            })
            })
    }
    
    //process post request
    // myClick(){
     
    // }

    render() {
        const {name} = this.state
        return (
            <div className = "FormContainer"> 
            <div className = "OppText">🤑 Add a scholarship </div>
            <form onSubmit= {this.submitHandler} className = "Form">
                <input className = "FormInput" type = "text" placeholder = "What's it called?" value ={this.state.name} onChange = {this.changeHandler}>
                </input>
                <button type = "submit" className = "FormButton" onClick = {this.myClick}> Add
                </button>
            </form>
            </div>
        );
    }
  }
  
  export default AddOpp;