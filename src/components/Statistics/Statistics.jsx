// Import necessary elements
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// TODO: Styles

// Template of data created by input:
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(object => {
          const { id, label, percentage } = object;

          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Default if no data:
Statistics.defaultProps = {
  title: undefined,
};

// Default expected proptypes of data. In stats I need array of objects
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
