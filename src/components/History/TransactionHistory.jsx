import PropTypes from 'prop-types';
import transactions from 'transactions.json';
import { History, Table, RowTab, HeaderTab } from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <History>
      <Table>
        <tr>
          <HeaderTab>Type</HeaderTab>
          <HeaderTab>Amount</HeaderTab>
          <HeaderTab>Currency</HeaderTab>
        </tr>
      </Table>
      <HistoryItem />
    </History>
  );
};

const HistoryItem = () => {
  return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tbody key={id}>
        <tr>
          <RowTab>{type}</RowTab>
          <RowTab>{amount}</RowTab>
          <RowTab>{currency}</RowTab>
        </tr>
      </tbody>
    );
  });
};
export default TransactionHistory;
TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
