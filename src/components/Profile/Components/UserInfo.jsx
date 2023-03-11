// Import necessary elements
import PropTypes from 'prop-types';
import css from '../Profile.module.css';

// Function Statistics get stats and create list of them
export const UserInfo = ({ username, tag, location }) => {
  return (
    <>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

UserInfo.defaultProps = {
  username: 'No username',
  location: 'No location',
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};
