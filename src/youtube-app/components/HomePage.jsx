// HomePage.jsx
import Sidebar from "./Sidebar";
import HomeVideos from "./HomeVideos";
import './home.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="ml-[240px] homevideos">
        <HomeVideos />
      </div>
    </div>
  );
};

export default HomePage;
