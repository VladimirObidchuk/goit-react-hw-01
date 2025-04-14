import Profile from "./profile/Profile";
import UserData from "../userData.json";
import Friends from "../friends.json";
import Transaction from "../transactions.json";
import "./App.css";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transaction/TransactionHistory";

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
      <FriendList friends={Friends} />
      <TransactionHistory transaction={Transaction} />
    </div>
  );
}
