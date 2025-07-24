import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <SidebarItem icon="🏠" label="Home" />
        <SidebarItem icon="🎬" label="Shorts" />
        <SidebarItem icon="📺" label="Subscriptions" dot />
      </div>

      <hr />

      <div className="sidebar-section">
        <p className="section-heading">You</p>
        <SidebarItem icon="🕘" label="History" />
        <SidebarItem icon="📂" label="Playlists" />
        <SidebarItem icon="📹" label="Your videos" />
        <SidebarItem icon="📚" label="Your courses" />
        <SidebarItem icon="⏰" label="Watch Later" />
        <SidebarItem icon="👍" label="Liked videos" />
      </div>

      <hr />

      <div className="sidebar-section">
        <p className="section-heading">Subscriptions</p>
        <SidebarItem iconSrc="https://yt3.googleusercontent.com/ytc/AOPolaQwPfrr" label="Dhruv Rathee" dot />
        <SidebarItem iconSrc="https://yt3.googleusercontent.com/ytc/AOPolaSykSDD" label="CodeWithHarry" dot />
        <SidebarItem iconSrc="https://yt3.ggpht.com/ytc/APkrFKaJd6w" label="WsCube Tech" dot />
        <SidebarItem iconSrc="https://yt3.ggpht.com/ytc/APkrFKaGeeks" label="GeeksforGeeks" dot />
        <SidebarItem iconSrc="https://yt3.ggpht.com/ytc/APkrFKaGeeks" label="Chrome for Developers" dot />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, iconSrc, label, dot }) => {
  return (
    <div className="sidebar-item">
      {iconSrc ? (
        <img src={iconSrc} alt={label} className="avatar" />
      ) : (
        <span className="icon">{icon}</span>
      )}
      <span className="label">{label}</span>
      {dot && <span className="dot">•</span>}
    </div>
  );
};

export default Sidebar;
