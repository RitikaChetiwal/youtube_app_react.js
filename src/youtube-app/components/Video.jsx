import React from 'react';
import '../../App.css';

export const Video = ({ videoDetails, setMainvideo }) => {
  console.log(videoDetails);

  return (
    <div className='listComp'>
      <div className="list" onClick={() => setMainvideo(videoDetails)}>
        <div className="vdo">
          <img src={videoDetails?.snippet?.thumbnails?.high?.url} alt="image" height='100px' width='180px' />
        </div>
        <div className="vdoInfo">
          <div className="description">{videoDetails?.snippet?.description}</div>
          <div className="title">{videoDetails?.snippet?.channelTitle}</div>
        </div>
      </div>
    </div>
  )
}
