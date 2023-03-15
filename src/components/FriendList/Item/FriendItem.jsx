// Import necessary files
import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

// Create one friend template
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// add default prop if no data
FriendItem.defaultProps = {
  name: 'No name added',
  isOnline: 'Profile is invisible',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
};

// add expected propTypes
FriendItem.propTypes = {
  friend: PropTypes(
    PropTypes.exact({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
