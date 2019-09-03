import React, {Component} from 'react'; 
import '../components/signup.css';
import ConfirmButton from '../components/confirmButton';


//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class SignUp extends Component{

    constructor(props){
        super(props);
            this.state = {
                email: "",
                copied: false
            };
        }
    changeHandler = e => {
        this.setState({email: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Email": this.state.email
            })
            })
            this.setState({copied: true});

    }
     
    render() {
        const {name} = this.state
        return (
            <div className = "SignUpContainer"> 
            <div className = "SignUpTitle"> Let’s build Peerlift together ✨  </div>
            <div className = "SignUpText">We do this thing where we ask for your advice, and we share new features and ideas over email. We’re also students and hate spam too.   Unsubscribe whenever you want. </div>
            <form onSubmit= {this.submitHandler} className = "Form">
                <input className = "SignUpInput" type = "text" placeholder = "Your email address                                                              " 
                value ={this.state.email} onChange = {this.changeHandler}>
                </input>
                <button type = "submit" className = {this.state.copied ? "hidden": "SignUpButton"} onClick = {this.myClick}> Subscribe
                </button>
            {this.state.copied ? 
                    <React.Fragment>
                    <div className = "AfterSubmit">All signed up!</div>
                      </React.Fragment>
                     : null}
                        </form>

            </div>
        );
    }
  }
  
  export default SignUp;
