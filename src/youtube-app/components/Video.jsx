// import '../../App.css';

export const Video = ({ videoDetails, setMainvideo }) => {
  console.log('videoDetails:',videoDetails);

  return (
    <div className=''>
      <div className="list" onClick={() => setMainvideo(videoDetails)}>
        <div className="vdo">
          <img src={videoDetails?.snippet?.thumbnails?.medium?.url} alt="image" height='100px' width='180px' />
        </div>
        <div className="vdoInfo">
          <div className="title"><h4>{videoDetails?.snippet?.title}</h4></div>
          {/* <div className="description">{videoDetails?.snippet?.description}</div> */}
          <div className="channelTitle">{videoDetails?.snippet?.channelTitle}</div>
          <div className="channelTitle">{videoDetails?.snippet?.publishTime}</div>
        </div>
      </div>
    </div>
  )
}
