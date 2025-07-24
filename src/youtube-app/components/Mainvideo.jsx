// import '../../App.css';

import HomePage from "./HomePage";

export const Mainvideo = ({ videoReference }) => {

  if (!videoReference?.id?.videoId) {
    return (
      <div id='initialState'>
        <HomePage videRef={videoReference}/>
      </div>
    )
  }

  const videoSource = `https://www.youtube.com/embed/${videoReference?.id?.videoId}`
  console.log(videoSource);

  return (
    <div className='mainVcomp' style={{ width: '760px', }}>
      <div className="box">
        <iframe src={videoSource} title='Youtube video player' height='480px' width='850px' allowFullScreen></iframe>
      </div>
      <div className="info">
        <div className="title"><h3>{videoReference?.snippet?.title}</h3></div>
        <div className="title"><h4>Channel name: {videoReference?.snippet?.channelTitle}</h4></div>
        <div className="desc">
          <p>{videoReference?.snippet?.publishedAt}</p>
          <p>Description: {videoReference?.snippet?.description}</p></div>
      </div>
    </div>
  )
}
