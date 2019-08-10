import React, { Component } from 'react';



class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
          active: false
        };
         // This binding is necessary to make `this` work in the callback-- added from tut
         this.handleClickTag = this.handleClickTag.bind(this);
      }

      handleClickTag(){
          //do something
      }

      render() {
          return(
            <SmartButton onClick={() => this.handleClickTag()} > Test Button </SmartButton>,
            <SmartButton onClick={() => this.handleClickTag()} > Test Button 2 </SmartButton>

          );
      }
}




class SmartButton extends Component{
    //init a state as false
    constructor(props){
        super(props);
        this.state = {
          active: false
        };
         // This binding is necessary to make `this` work in the callback-- added from tut
         this.handleLocalState= this.handleLocalState.bind(this);
      }

      handleLocalState(){
          this.setState({active: !this.state.active})
          console.log(this.state.active);

      }

      render() {
          return(
            <button className = "filter-button" onClick={() => this.handleLocalState()}> </button>

          );
      }

}
  
export default Test;
