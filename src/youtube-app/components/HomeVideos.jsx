// HomeVideos.jsx
import { useEffect, useState } from "react";
import youtube from "../api/Youtube";
import { YOUTUBE_API_KEY } from "../../config";
import './homevideos.css'

const HomeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchInitialVideos = async () => {
      try {
        const response = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 8,
            q: "trending", // default search
            key: YOUTUBE_API_KEY
          },
        });
        console.log("this data:", response.data.items);

        setVideos(response.data.items);
      } catch (error) {
        console.error("Failed to fetch initial videos", error);
      }
    };

    fetchInitialVideos();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 app">
      {videos.map((video, index) => (
        <div key={index} className="w-[300px] shadow-md cont">
          <iframe
            className="w-full h-[200px]"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allowFullScreen
          />
          <p className="text-sm font-semibold mt-2">{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeVideos;
