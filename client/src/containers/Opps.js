//This is a stateful React container that handles fetching scholarship data, sorting scholarships, 
// filtering scholarships, and rendering these scholarships by mapping over each scholarship with OppBox.
// See functions for more explanation.  "Contact" is currently the convention for the array of objects containing
// scholarship data.


import React, {Component} from 'react'; 
import '../components/OppBox.css';
import '../components/filters.css';
import '../components/mobileFilter.css';
import Filters from "../components/filters";
import MobileFilter from "../components/mobileFilter";
import OppBox from '../components/OppBox';
import AddOpp from '../components/addOpp.js';
import OppPage from '../components/oppPage.js';
import Backdrop from '../components/backdrop.js';
import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import check from '../images/check@2x.svg';
import blackcheck from '../images/blackcheck@2x.svg';



// //This is a constructor for a component 
class Opps extends Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      contacts_const: [],
      activeId: "",
      filters: false,
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
    
  }
  //This function handles fetching all scholarship data.  Then, it sorts the produced array in ascending order to the current date.
  componentDidMount() {
    fetch('http://localhost:9000/api/scholarships')
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
        //Define a constant state of the data, that we'll use to reset the state when needed.
        this.setState({ contacts_const: data })
      })
      .catch(console.log)
  }

        //This function sets a bool state of whether mobile filters are active or not, 
        //triggering conditional rendering.
         handleClickFilters(){
            this.setState({filters: !this.state.filters});
        }


    //This function handles filtering logic for the stem tag.  If the stem filter is clicked,
    // this function creates a copy of the current scholarships array, then filters to include
    // based on the given word.  If not, the state is reset, and scholarships data is reset to its original state.
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
    console.log(this.state.filters);

    return(
        <div className = "filter-opp-wrapper">
        {/* Set to display: none on desktop */}
            <MobileFilter onPress={() => this.handleClickFilters()}></MobileFilter>

          <div className = {this.state.filters ? "full-filter-clicked": "full-filter-wrapper"}> 
            <div className = "header">Filter </div>

            <div className = "grade-wrapper">
            <div className = "title">Grade: </div>
            <button className={this.state.onNine ? "button-clicked": "filter-button"} onClick={() => this.handleClickNine(word = "freshman")}> 9</button>
            <button className={this.state.onTen ? "button-clicked": "filter-button"}  onClick={() => this.handleClickTen(word = "sophomore")}> 10 </button>
            <button className={this.state.onEleven ? "button-clicked": "filter-button"}  onClick={() => this.handleClickEleven(word = "junior")}>11 </button>
            <button className={this.state.onTwelve ? "button-clicked": "filter-button"}  onClick={() => this.handleClickTwelve(word = "senior")}>12 </button>
            </div>

            <div className = "title"> Tags:</div>
            <div className = "tag-grid"> 

            {/* Each segment below checks if a filter button is active, assigns appropriate styling, and triggers
            a rerender with the corresponding handleClick function. */}
            <div className = "stem tag-text">STEM </div>
            <button className={this.state.onStem ? "button-clicked stemButton": "filter-button stemButton "} onClick={() => this.handleClickStem(word = "STEM")}>
            {this.state.onStem && <img src = {this.state.filters ? blackcheck:check}></img>}  </button>

            <div className = "lowIncome tag-text">Low-Income </div>
            <button className={this.state.onLowIncome ? "button-clicked lowIncomeButton": "filter-button lowIncomeButton "} onClick={() => this.handleClickLi(word = "low-income")}>
            {this.state.onLowIncome && <img src = {this.state.filters ? blackcheck:check}></img>}  </button> 

            <div className = "diversity tag-text">Diversity </div>
            <button className={this.state.onDiversity ? "button-clicked diversityButton": "filter-button diversityButton " } onClick={() => this.handleClickDiversity(word = "diversity")}>
            {this.state.onDiversity && <img src = {this.state.filters ? blackcheck:check}></img>}  </button> 

            <div className = "service tag-text">Service </div>
            <button className={this.state.onService ? "button-clicked serviceButton": "filter-button serviceButton "} onClick={() => this.handleClickService(word = "service")}> 
            {this.state.onService && <img src = {this.state.filters ? blackcheck:check}></img>}  </button> 

            </div>
          

          </div>
    
            

          <div className = "add-box-wrapper"> 

          <AddOpp></AddOpp>

          <div className = "opp-box-wrapper"> 
            {/* Map over the array of scholarship objects, and provide all data as props for OppBox. */}
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

