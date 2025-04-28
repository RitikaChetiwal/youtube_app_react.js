import React from 'react';
import '../../App.css';

export const Mainvideo = ({videoReference}) => {

  if(!videoReference?.id?.videoId){
    return (
      <div>
        <h1 className='initialState'>Search Youtube❣️</h1>
      </div>
    )
  }

  const videoSource = `https://www.youtube.com/embed/${videoReference?.id?.videoId}`
  console.log(videoSource);

  return (
    <div className='mainVcomp' style={{width:'750px', height:'520px'}}>
        <div className="box">
            <iframe src={videoSource} title='Youtube video player' height='491px' width='750px' allowFullScreen></iframe>
        </div>
        <div className="info">
        <div className="title"><h3>Channel name: {videoReference?.snippet?.channelTitle}</h3></div>
        <div className="desc"><h4>Description: {videoReference?.snippet?.description}</h4></div>
        </div>
    </div>
  )
}
