/**
 * Created by consultadd on 13/6/17.
 */
import React, { Component }  from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){

        return(
            <div className="search-bar">
                <h2 className="main-heading">Video Player</h2>
                <input
                    placeholder="Search"
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}
export default SearchBar;