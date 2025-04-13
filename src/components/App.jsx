import Profile from "./profile/Profile";
import UserData from "../userData.json";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Profile
        userName={UserData.username}
        tag={UserData.tag}
        location={UserData.location}
        image={UserData.avatar}
        stats={UserData.stats}
      />
    </div>
  );
}
