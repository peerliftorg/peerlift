import React, {Component} from 'react'; 
import '../components/mobileFilter.css';



const MobileFilter = ( {onPress} ) => {

    return(
        <button onClick={onPress} className = 'mobileFilter'>
        <div  id = "filterText">Filter</div>
    </button>
      
    );
  }
  
  export default MobileFilter;
  

  // class MobileFilter extends React.Component{
//     render() {
//         return (
//             <div className = 'mobileFilter'>
//                 <div onClick={this.props.onPress} id = "filterText">Filter</div>
//             </div>
//         );
//     }
//   }
