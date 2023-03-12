// Import necessary elements
import css from '../Profile.module.css';
import PropTypes from 'prop-types';

// Profile informations element
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

// Expected types of props
ProfileInfo.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
