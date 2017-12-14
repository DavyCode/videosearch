import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCs9g8em_Z2saT6dRDtJbqN40goVJzIP6M';


class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('react');
  }
   
  

      videoSearch(term){
        YTSearch({ key : API_KEY, term : term}, (data) => {
          if(!data){
            return (
               <div> Page intializing... </div>
            )
          }
          this.setState({ 
            videos : data,
            selectedVideo : data[0]
          });
        });
      };


  render(){
    return ( 
      <div>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
          <div className='row'>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList 
              onVideoSelect={videoSelected => this.setState({selectedVideo : videoSelected})}
              videos={this.state.videos} />
          </div>
          
      </div>
   )
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
