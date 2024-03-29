//This is a stateful React container that handles fetching summerprogram data, sorting summerprograms, 
// filtering summer programs, and rendering these summerprograms  by mapping over each program with OppBox.
// See functions for more explanation.  "Contact" is currently the convention for the array of objects containing
// summer program data. Code logic is identical to Opps.JS except for variable names and what is passed to oppBox.


import React, {Component} from 'react'; 
import '../components/OppBox.css';
import '../components/filters.css';
import '../components/mobileFilter.css';
import Filters from "../components/filters";
import MobileFilter from "../components/mobileFilter";
import MyNavbar from '../components/nav.js';
import OppBox from '../components/OppBox';
import AddOpp from '../components/addOpp.js';
import OppPage from '../components/oppPage.js';
import Backdrop from '../components/backdrop.js';
import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import check from '../images/check@2x.svg';
import blackcheck from '../images/blackcheck@2x.svg';
import Footer from "../components/footer";
import NoResults from '../components/noResults.js';



class Summer extends Component{

    constructor(props){
      super(props);
      this.state = {
        contacts: [],
        contacts_const: [],
        activeId: "",
        isEmpty: false,
        filters: false,
        onOpp: false,
        onPreCollege: false,
        onLeadership: false,
        onStem: false,
        onNine: false,
        onTen: false,
        onEleven: false,
        onTwelve: false
  
  
      };
     
  
    }
  
    componentDidMount() {
      fetch('/api/summerprograms')
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
  
          //toggle mobile filters
           handleClickFilters(){
              this.setState({filters: !this.state.filters});
  
            
          }
  
  
      //for year
      handleClickStem(word) {

          this.setState({isEmpty:false});

          if (!this.state.onStem){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onStem:!this.state.onStem})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
              
          }
          else if (this.state.onStem){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onStem:!this.state.onStem})
          }
      }
  
  
      handleClickPreCollege(word) {
        this.setState({isEmpty:false});
          if (!this.state.onPreCollege){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onPreCollege:!this.state.onPreCollege})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
          }
          else if (this.state.onPreCollege){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onPreCollege:!this.state.onPreCollege})
          }
      }
  
      handleClickLeadership(word) {
        this.setState({isEmpty:false});
          if (!this.state.onLeadership){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onLeadership:!this.state.onLeadership})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
          }
          else if (this.state.onLeadership){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onLeadership:!this.state.onLeadership})
          }
      }
  
      handleClickNine(word) {
        this.setState({isEmpty:false});
          if (!this.state.onNine){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onNine:!this.state.onNine})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
          }
          else if (this.state.onNine){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onNine:!this.state.onNine})
          }
      }
  
      handleClickTen(word) {
        this.setState({isEmpty:false});
          if (!this.state.onTen){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onTen:!this.state.onTen})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
          }
          else if (this.state.onTen){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onTen:!this.state.onTen})
          }
      }
  
      handleClickEleven(word) {
        this.setState({isEmpty:false});
          if (!this.state.onEleven){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onEleven:!this.state.onEleven})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
          }
          else if (this.state.onEleven){
              this.setState({contacts:this.state.contacts_const})
              this.setState({onEleven:!this.state.onEleven})
          }
      }
  
      handleClickTwelve(word) {
        this.setState({isEmpty:false});
          if (!this.state.onTwelve){
              //take the modified contact list
              const array = this.state.contacts;
              const arrayTwo = array.filter(item => {
                  return item.Tags.includes(word);
                })    
              this.setState({contacts:arrayTwo})
              this.setState({onTwelve:!this.state.onTwelve})
              if (arrayTwo === undefined || arrayTwo == 0) {
                this.setState({isEmpty: true})
            }
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
     // console.log(this.state.filters);
  
      return(
          <div className = "wrapper">
            <MyNavbar> </MyNavbar>

          <div className = "filter-opp-wrapper">
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
  
              <div className = "stem tag-text">Pre-College </div>
              <button className={this.state.onPreCollege ? "button-clicked stemButton": "filter-button stemButton "} onClick={() => this.handleClickPreCollege(word = "pre-college")}>
              {this.state.onPreCollege && <img src = {this.state.filters ? blackcheck:check}></img>}  </button>
  
              <div className = "lowIncome tag-text">Leadership </div>
              <button className={this.state.onLeadership ? "button-clicked lowIncomeButton": "filter-button lowIncomeButton "} onClick={() => this.handleClickLeadership(word = "leadership")}>
              {this.state.onLeadership && <img src = {this.state.filters ? blackcheck:check}></img>}  </button> 
  
              <div className = "diversity tag-text">STEM </div>
              <button className={this.state.onStem ? "button-clicked diversityButton": "filter-button diversityButton " } onClick={() => this.handleClickStem(word = "stem")}>
              {this.state.onStem && <img src = {this.state.filters ? blackcheck:check}></img>}  </button> 
  
              </div>
            
            </div>
      
              
  
            <div className = "add-box-wrapper"> 
  
            <AddOpp
            title = "summer program">
            </AddOpp>
  
            <div className = {this.state.isEmpty ? "opp-box-wrapper-no-result opp-box-wrapper": "opp-box-wrapper "}> 

            {this.state.isEmpty &&
            <NoResults></NoResults>}
  
             {this.state.contacts.map((contact) =>
               <React.Fragment> 
              
               {/* <Route exact path = "/scholarships/:id"  component = {OppPage} >  */}
               <Link to = {`/summerprograms/${contact._id}`}>
  
              <OppBox 
              id = {contact._id}
              title = {contact.Title}
              amount = {contact.FinancialAid}
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
          <Route path = "/summerprograms/:id"  
          render={(props) => <OppPage {...props} page={'summerprograms'} />} /> 

            <Footer></Footer>
          </div>
      );
  }
  }
  
  export default withRouter(Summer);