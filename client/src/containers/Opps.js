import React, {Component} from 'react'; 
import '../components/OppBox.css';
import '../components/filters.css';
import Filters from "../components/filters";
import OppBox from '../components/OppBox';
import AddOpp from '../components/addOpp.js';
import OppPage from '../components/oppPage.js';
import Backdrop from '../components/backdrop.js';
import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//need to import contacts to here
// //This is a constructor for a component 
class Opps extends Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      contacts_const: [],
      activeId: "",
      onOpp: false,
      onStem: false,
      onLowIncome: false,
      onDiversity: false,
      onService: false,
      onNine: false,
      onTen: false,
      onEleven: false,
      onTwelve: false


    };
     // This binding is necessary to make `this` work in the callback-- added from tut
     this.handleClickTag = this.handleClickTag.bind(this);
     this.handleClickOpps = this.handleClickOpps.bind(this);

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

        //grab a given element's ID, 
        handleClickOpps(oppId){
            this.setState({onOpp: !this.state.onOpp});
            this.setState({activeId: oppId});
             //var pageId = {oppId};
             console.log('hola')

        }


        //filter tags
        handleClickTag(word) {
        //set the state of contacts at the end
        if (!this.state.onStem){
            //const word = "STEM";
            //filter from contacts_consc to ensure always from fullset
            const array = this.state.contacts_const;
            const arrayTwo = array.filter(item => {
                //console.log(item.Tags)
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onStem:!this.state.onStem})
            console.log(this.state.onStem)
        }
        else{
            this.setState({contacts:this.state.contacts_const})
            this.setState({onStem:!this.state.onStem})
        }
    }
    //for year
    handleClickStem(word) {
        //code for onStem
        if (!this.state.onStem){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onStem:!this.state.onStem})
        }
        else if (this.state.onStem){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onStem:!this.state.onStem})
        }
    }

    handleClickService(word) {
        //code for onStem
        if (!this.state.onService){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onService:!this.state.onService})
        }
        else if (this.state.onService){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onService:!this.state.onService})
        }
    }

    handleClickLi(word) {
        //code for onStem
        if (!this.state.onLowIncome){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onLowIncome:!this.state.onLowIncome})
        }
        else if (this.state.onLowIncome){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onLowIncome:!this.state.onLowIncome})
        }
    }

    handleClickDiversity(word) {
        //code for onStem
        if (!this.state.onDiversity){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onDiversity:!this.state.onDiversity})
        }
        else if (this.state.onDiversity){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onDiversity:!this.state.onDiversity})
        }
    }

    handleClickNine(word) {
        //code for onStem
        if (!this.state.onNine){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onNine:!this.state.onNine})
        }
        else if (this.state.onNine){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onNine:!this.state.onNine})
        }
    }

    handleClickTen(word) {
        //code for onStem
        if (!this.state.onTen){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onTen:!this.state.onTen})
        }
        else if (this.state.onTen){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onTen:!this.state.onTen})
        }
    }

    handleClickEleven(word) {
        //code for onStem
        if (!this.state.onEleven){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onEleven:!this.state.onEleven})
        }
        else if (this.state.onEleven){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onEleven:!this.state.onEleven})
        }
    }

    handleClickTwelve(word) {
        //code for onStem
        if (!this.state.onTwelve){
            //take the modified contact list
            const array = this.state.contacts;
            const arrayTwo = array.filter(item => {
                return item.Tags.includes(word);
              })    
            this.setState({contacts:arrayTwo})
            this.setState({onTwelve:!this.state.onTwelve})
        }
        else if (this.state.onTwelve){
            this.setState({contacts:this.state.contacts_const})
            this.setState({onTwelve:!this.state.onTwelve})
        }
    }




  render() {
    //console.log("test"+this.state.contacts)
    //we want to reset value to normal
    var word;
    var oppId;
    //console.log(this.state.activeId);

    return(
        <div className = "filter-opp-wrapper">
          <div className = "full-filter-wrapper"> 
          <div className = "filter-wrapper">
            <div className = "header">Filter </div>

            <div className = "grade-wrapper">
            <div className = "title">Grade: </div>
            <button className={this.state.onNine ? "button-clicked": "filter-button"} onClick={() => this.handleClickNine(word = "freshman")}> 9</button>
            <button className={this.state.onTen ? "button-clicked": "filter-button"}  onClick={() => this.handleClickTen(word = "sophomore")}> 10 </button>
            <button className={this.state.onEleven ? "button-clicked": "filter-button"}  onClick={() => this.handleClickEleven(word = "junior")}>11 </button>
            <button className={this.state.onTwelve ? "button-clicked": "filter-button"}  onClick={() => this.handleClickTwelve(word = "senior")}>12 </button>
            </div>

            <div className = "title"> Tags:</div>
            <div className = "tags"> 
            <button className={this.state.onStem ? "button-clicked": "filter-button"} onClick={() => this.handleClickStem(word = "STEM")}> STEM</button>
            <button className={this.state.onLowIncome ? "button-clicked": "filter-button"} onClick={() => this.handleClickLi(word = "low-income")}> Low-income </button>
            <button className={this.state.onDiversity ? "button-clicked": "filter-button"} onClick={() => this.handleClickDiversity(word = "diversity")}>Diversity </button>
            <button className={this.state.onService ? "button-clicked": "filter-button"} onClick={() => this.handleClickService(word = "service")}>Service </button>
            </div>
            </div>
          

          </div>
    
            

          <div className = "add-box-wrapper"> 

          <AddOpp></AddOpp>

          <div className = "opp-box-wrapper"> 

           {this.state.contacts.map((contact) =>
             <React.Fragment> 
            
             {/* <Route exact path = "/scholarships/:id"  component = {OppPage} >  */}
             <Link to = {`/scholarships/${contact._id}`}>

            <OppBox 
            id = {contact._id}
            title = {contact.Title}
            amount = {contact.DescriptionAmount}
            grade = {contact.Grade}
            date = {contact.DescriptionDate}
            link = {contact.Link}
            description = {contact.Description}
            > 
             </OppBox> 
             </Link>
            {/* //   </Route>  */}

              </React.Fragment>

            )};

        </div>
        </div>
        </div>
    );
}
}

export default withRouter(Opps);


// const SmartButton = ( {contacts} ) => {
    
//     return(
//         <button className = "filter-button" >Click Me </button>

//     )
//   }
