/**
 * Created by consultadd on 13/6/17.
 */
import React, { Component }  from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        // console.log(event.target.value);
        this.setState({
            item:event.target.value,
        });
    }

    render(){
        console.log(this.state.item,"item");
        return(
            <div>
                <input onChange={this.onInputChange}/>
            </div>
        );
    }
}
export default SearchBar;