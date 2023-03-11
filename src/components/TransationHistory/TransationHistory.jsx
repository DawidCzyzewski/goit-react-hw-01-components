// Import necessary elements
import PropTypes from 'prop-types';
import css from './TransationHistory.module.css';

// TODO: Styles

// Template of data created by input:
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.item}>{transaction.type}</td>
            <td className={css.item}>{transaction.amount}</td>
            <td className={css.item}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Default if no data:
// TransationHistory.defaultProps = {};

// Default expected proptypes of data. In stats I need array of objects
TransactionHistory.propTypes = {
  transactions: PropTypes.array,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
// exporting file to could use in other
export default TransactionHistory;
