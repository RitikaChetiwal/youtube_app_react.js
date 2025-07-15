import { useState } from 'react';
// import './App.css';
import { Searchbar } from './youtube-app/components/Searchbar';
import { Mainvideo } from './youtube-app/components/Mainvideo';
import { Videolist } from './youtube-app/components/Videolist';
import youtube from './youtube-app/api/Youtube'

export const App = () => {

  const [mainVideo, setMainvideo] = useState(undefined);
  const [videos,setVideos] = useState([]);

  const submitHandler = async (query) => {
   try {
    const parsedData = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyCNPqeSrU9UwM0jtTRKdQ3I5P7npYddASI',
        q: query
      //   url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=query&key=AIzaSyCJcWYk65V9JTcdiCH-7S-lqaY_0Fu4Vpk'
      }
    });
    // console.log(`Response data:`,parsedData);
    // console.log(`Response:`,parsedData.data.items[0].id);
    const videoArr = parsedData.data.items;
    for (const value of videoArr) {
      console.log(value);
      console.log(value.id);
      
    }
    setMainvideo(parsedData.data.items[0]);   
    setVideos(parsedData.data.items)
   } catch (error) {
    console.error(`Error fetching YouTube data: ${error}`);
    
   }
  }

  return (
    <div className="main">
      <div className="searchBar">
        <Searchbar submitHandler = {submitHandler}/>
      </div>
      <div className="rest">
        <div className="mainVideo">
          <Mainvideo videoReference = {mainVideo} />
        </div>
        <div className="videoList">
          <Videolist videoList = {videos} setMainvideo = {setMainvideo}/>
        </div>
      </div>
    </div>
  )
}