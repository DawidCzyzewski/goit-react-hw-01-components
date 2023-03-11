// Import necessary elements
import PropTypes from 'prop-types';
import css from '../TransationHistory.module.css';

// Transactions element
export const Transactions = ({ transactions }) => {
  return transactions.map(transaction => {
    const { id, type, amount, currency } = transaction;
    return (
      <tr key={id} className={css.row}>
        <td className={css.item}>{type}</td>
        <td className={css.item}>{amount}</td>
        <td className={css.item}>{currency}</td>
      </tr>
    );
  });
};

// Default expected proptypes of data. In stats I need array of objects
Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
