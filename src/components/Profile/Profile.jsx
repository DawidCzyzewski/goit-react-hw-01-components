// Import necessary elements
import PropTypes from 'prop-types';
import css from './Profile.module.css';

// Import components
import { UserInfo } from './Components/UserInfo';
import { ProfileInfo } from './Components/ProfileInfo';

// create template for data from output:
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <UserInfo username={username} tag={tag} location={location} />
      </div>

      <ul className={css.stats}>
        <ProfileInfo stats={stats} />
      </ul>
    </div>
  );
};

// Default image if no data from backend
Profile.defaultProps = {
  image: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
};

// Default expected proptypes of data:
Profile.propTypes = {
  image: PropTypes.string,
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
