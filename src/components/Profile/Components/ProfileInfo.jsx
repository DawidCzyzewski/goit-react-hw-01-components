import css from '../Profile.module.css';

// Function Statistics get stats and create list of them
export const ProfileInfo = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </>
  );
};
