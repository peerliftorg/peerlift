import React, {Component} from 'react'; 
import '../components/addOpp.css';
import ConfirmButton from '../components/confirmButton';


//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class AddOpp extends Component{

    constructor(props){
        super(props);
            this.state = {
                name: "",
                copied: false
            };
        }
    changeHandler = e => {
        this.setState({name: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
        fetch('/api/scholarships', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Name": this.state.name
            })
            })
            this.setState({copied: true});

    }
     
    render() {
        const {name} = this.state
        return (
            <div className = "FormContainer"> 
            <div className = "OppText">🤑 Add a {this.props.title} </div>
            <form onSubmit= {this.submitHandler} className = "Form">
                <input className = "FormInput" type = "text" placeholder = "What's it called?" value ={this.state.name} onChange = {this.changeHandler}>
                </input>
                <button type = "submit" className = "FormButton" onClick = {this.myClick}> Add
                </button>
            </form>
            {this.state.copied ? 
                    <React.Fragment>
                     <ConfirmButton
                     text = "Sent to Peerlift!"
                     visible = {false}
                     ></ConfirmButton>
                      </React.Fragment>
                     : null}
            </div>
        );
    }
  }
  
  export default AddOpp;
  //notee: myClick goes nowhere