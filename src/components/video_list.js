import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = ({videos, onVideoSelect}) => {
  const videoItem = videos.map( video => {
    return (
        <VideoListItem 
         onVideoSelect={onVideoSelect} 
         video={video} 
         key={video.etag}
         />
    )
})

    return (
      <div>
          <ul className="list-group col-sm-8 col-lg-8">
              <li className="list-group-item active">Search Results : {videos.length}</li> 
              {/* //wireup video search term to show up here */}
              {videoItem}
          </ul>
      </div>
   )
}

export default VideoList;
        