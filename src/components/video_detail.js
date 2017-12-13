import React from 'react'
import YouTube from 'react-youtube'



const VideoDetail = ({ video }) => {
    if(!video){
        return (
            <div className="card-block">
              <div>
                  <i class="fa fa-spinner" aria-hidden="true"></i>
                  <h4 className="card-title">
                     <span class="sr-only">Loading...</span>
                  </h4>  
              </div>
            </div>
        )
    }

    const videoId = video.id.videoId;
    // const url =`https://www.youtube.com/embed/${videoId}`

    const opts = {
        height: '',
        width: '',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
    }

    // _onReady = (event) => {
        // access to player in all event handlers via event.target
        //    event.target.pauseVideo();
        // }
        

    return ( 
         <div className='col-md 6 col-sm-10'>
             <div className="card mb-3">
                <div className='embed-responsive embed-responsive-16by9'>
                    {/* <iframe className="embed-responsive-item" scr={url} allowFullScreen></iframe> */}
                    <YouTube videoId={videoId} opts={opts} />
                </div>
                <div>
                    <div className="card-block">
                        <div><h4 className="card-title">{video.snippet.title}</h4></div>
                        <div> <p className="card-text">{video.snippet.description}</p></div>
                        <div> <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p></div>
                         {/* wire up video upload date */}
                    </div>
                </div>
            </div>
         </div>
    )
}

export default VideoDetail;



