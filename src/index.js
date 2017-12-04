import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCs9g8em_Z2saT6dRDtJbqN40goVJzIP6M';


const App = () => {
   return ( 
      <div>
          <SearchBar />
      </div>
   )
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
