import React, { Component } from 'react';
import SearchBar from "./search_bar";
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC_iFck5o0mmkg2IALWWZNv8x6Ww76lApM';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos:[]
    }

    YTSearch({key:API_KEY, term:"music"}, (videos) => {
        this.setState({videos})
    })
  }

  render() {
    console.log(this.state.videos)
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
