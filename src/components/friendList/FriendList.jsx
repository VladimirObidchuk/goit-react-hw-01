import css from "./FriendList.module.css";
import FriendsListItem from "../friendlistitem/Friendlistitem";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map((frend, index) => {
          return <FriendsListItem key={index} frend={frend} />;
        })}
      </ul>
    </div>
  );
}
