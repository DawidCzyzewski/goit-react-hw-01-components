// Import necessary elements
import css from '../Profile.module.css';
import PropTypes from 'prop-types';

// Image element
export const ProfileImage = ({ image }) => {
  return <img src={image} alt="User avatar" className={css.avatar} />;
};

// Default image if no data from backend
ProfileImage.defaultProps = {
  image: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
};

// Expected type of prop
ProfileImage.propTypes = {
  image: PropTypes.string,
};
