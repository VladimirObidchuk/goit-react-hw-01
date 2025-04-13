import css from "./Profile.module.css";

export default function Profile({ userName, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.top}>
        <img
          className={css.img}
          src={image}
          alt="User avatar"
          width={200}
          height={200}
        />
        <p className={css.title}>{userName}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.bottom}>
        {Object.keys(stats).map((key) => (
          <li key={key} className={css.itemstat}>
            <span className={css.statstitle}>{key}</span>
            <span className={css.statstext}>{stats[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
