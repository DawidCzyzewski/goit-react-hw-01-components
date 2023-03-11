import css from '../Profile.module.css';
import PropTypes from 'prop-types';

export const ProfileImage = ({ image }) => {
  return <img src={image} alt="User avatar" className={css.avatar} />;
};

ProfileImage.defaultProps = {
  image: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
};

ProfileImage.propTypes = {
  image: PropTypes.string,
};
