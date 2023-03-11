// Import necessary elements
import PropTypes from 'prop-types';
import css from '../Profile.module.css';

// User info element
export const UserInfo = ({ username, tag, location }) => {
  return (
    <>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

// Default props if no data from backend
UserInfo.defaultProps = {
  username: 'No username',
  location: 'No location',
};

// Expected types of props
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};
