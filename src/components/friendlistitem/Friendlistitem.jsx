import clsx from "clsx";
import css from "./Friendlistitem.module.css";

export default function FriendsListItem({ frend: { avatar, name, isOnline } }) {
  return (
    <li className={css.item}>
      <div className={css.block}>
        <img
          className={css.img}
          src={avatar}
          alt={`${name}'s avatar`}
          width={200}
          height={200}
        />
        <p className={css.title}>{name}</p>
        <p
          className={clsx(css.status, {
            [css.isOnline]: isOnline,
            [css.isOffline]: !isOnline,
          })}
        >
          {isOnline === true ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
}
