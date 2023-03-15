// Import necessary elements
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendItem } from './Item/FriendItem';

// Template of data created by input:
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendItem
          // key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
};

// Default expected proptypes of data. In stats it's need array of objects
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      // id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
