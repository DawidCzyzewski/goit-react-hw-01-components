// Import necessary elements
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendItem from './Item/FriendItem';

// TODO: Styles

// Template of data created by input:
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
};

// Default expected proptypes of data. In stats I need array of objects
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

// exporting file to could use in other
export default FriendList;
