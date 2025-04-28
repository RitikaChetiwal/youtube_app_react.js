import React from 'react';
import '../../App.css';
import { Video } from './Video';

export const Videolist = ({ videoList, setMainvideo }) => {

    const videos = new Array(7).fill();
    console.log(videos);


    // console.log(videoList);

    return (
        <div>
            {videoList.map((vid, index) => <Video videoDetails={vid} setMainvideo={setMainvideo} key={index} />)}
        </div>
    )
}
