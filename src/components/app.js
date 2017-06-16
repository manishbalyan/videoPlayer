import React, { Component } from 'react';
import SearchBar from "./search_bar";
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';
import _ from 'lodash'
const API_KEY = 'AIzaSyC_iFck5o0mmkg2IALWWZNv8x6Ww76lApM';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    }

    this.videoSearch('reactjs')
  }

  videoSearch(term){
      YTSearch({key:API_KEY, term:term}, (videos) => {
          this.setState({
              videos:videos,
              selectedVideo:videos[0]
          });
      });
  }

  render() {

    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 400);

    return (
      <div className="row">
        <div className="col-md-12">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <div className="col-md-7">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
