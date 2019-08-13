import React, {Component} from 'react'; 
import '../components/oppPage.css';


//can I store product ID as a variable in return? 
// //This is a constructor for a component 

class OppPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: []
        };
    }


    componentDidMount() {
        //let idString = this.props.id;
        fetch('http://localhost:9000/users'+'/' +this.props.id)
          .then(res => res.json())
          .then((data) => {
            this.setState({ content: data })
          })
          .catch(console.log)
      }

    render() {
        //console.log(idString)
        //console.log(this.props.id)
        console.log(this.state.content)

        return (
            <div className = 'wrapper'>

             <div className = "OppPageWrapper"  >
            <li  >
        
            <div  className = 'Title'> {this.state.content.Title}</div>
        
            <div className = 'Tags'> 
                    <div className = 'Data' id = 'Amount'> {this.state.content.DescriptionAmount}</div>
                    <div className = 'Data' id = 'Grade'>{this.state.content.Grade}</div>
            </div>
        
            <div className = 'Deadline'>{this.state.content.DescriptionDate}</div>
            <div className = 'Text'> {this.state.content.Description} </div>
        
        
            <div className = 'Cta'> 
                    <div className = 'Share'> Share </div>
                    <a href = {this.state.content.Link} className = 'Apply' target="_blank"> Apply </a>
                    </div>
                    </li>
        
            </div> 
            </div>
        );
    }
  }
  

// const OppPage= ( {id, title, amount, grade, date, link, onPress, oppId} ) => {

//   return(
    // <div className = 'wrapper'>

    // <button className = "OppBoxWrapper" onClick={onPress} oppId = {id}>
    // <li key={id} >


    // <div  className = 'Title'> {title}</div>

    // <div className = 'Tags'> 
    //         <div className = 'Data' id = 'Amount'> {amount}</div>
    //         <div className = 'Data' id = 'Grade'>{grade}</div>
    // </div>

    // <div className = 'Deadline'>{date}</div>
    // <div className = 'Text'> Coca-Cola Scholars is a prestigious four-year grant of $ </div>


    // <div className = 'Cta'> 
    //         <div className = 'Share'> Share </div>
    //         <a href = {link} className = 'Apply' target="_blank"> Apply </a>
    //         </div>
    //         </li>

    // </button>
    // </div>
//   )
// }
export default OppPage;
