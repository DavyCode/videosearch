import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCs9g8em_Z2saT6dRDtJbqN40goVJzIP6M';


class App extends Component {
 constructor (props){
   super(props);

   this.state = {
     videos : []
   }


   YTSearch({ key : API_KEY, term : 'rukus'}, (data) => {
    this.setState({ videos : data });
 })
 }

  render(){
    return ( 
      <div>
          <SearchBar />
          <VideoList  videos={this.state.videos} />
      </div>
   )
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
