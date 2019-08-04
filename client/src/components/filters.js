import React, {Component} from 'react'; 
import '../components/filters.css';

class Filters extends Component{
    render() {
        return (
        <div className = "filter-wrapper">
        <div className = "header">Filter </div>

        <div className = "grade-wrapper">
        <div className = "title">Grade </div>

        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        </div>

        <div className = "title"> Tags</div>
        <div className = "tags"> 
        <FilterButton ></FilterButton>
        <FilterButton ></FilterButton>
        <FilterButton ></FilterButton>
        <FilterButton ></FilterButton>
        </div>
        </div>
        );
    }
  }
  //Starting with static
  class FilterButton extends Component{
    render() {
        return (
        <button className = "filter-button">
        </button>
        );
    }
  }
  

  export default Filters;