// Import necessary elements
import PropTypes from 'prop-types';
import css from './TransationHistory.module.css';

// Import components
import { Transactions } from './Components/Transactions';

// Template of data created by input:
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css.row}>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transactions transactions={transactions} />
      </tbody>
    </table>
  );
};

// Default expected proptypes of data. In stats I need array of objects
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
