// Import necessary elements
import PropTypes from 'prop-types';
import css from './Profile.module.css';

// Import components
import { ProfileInfo } from './Components/ProfileInfo';

// TODO: styles CSS

// create template for data from output:
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <ProfileInfo stats={stats} />
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  username: 'No username',
  location: 'No location',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
};

// Default expected proptypes of data:
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
