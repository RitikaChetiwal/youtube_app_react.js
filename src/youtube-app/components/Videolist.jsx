import '../../App.css';
import { Video } from './Video';

export const Videolist = ({ videoList, setMainvideo }) => {

    const videos = new Array(7).fill();
    console.log(videos);


    // console.log(videoList);

    return (
        <div className='vdolist'>
            {videoList.map((vid) => <Video videoDetails={vid} setMainvideo={setMainvideo} key={vid.id.videoId}
            />)}
        </div>
    )
}
