import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = (props) => {
  const videoItem = props.videos.map( (video) => <VideoListItem video={video} key={Math.random()}/>)
   
  return (
      <div>
          <ul className="list-group col-4">
              <li className="list-group-item active">Search Results : {props.videos.length}</li>
              {videoItem}
          </ul>
      </div>
   )
}

export default VideoList;