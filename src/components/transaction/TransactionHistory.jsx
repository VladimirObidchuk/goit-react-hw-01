import TransactionItem from "../transactionitem/TransactionItem.jsx";
import css from "./Transaction.module.css";

export default function TransactionHistory({ transaction }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr className={css.header}>
            <th className={css.titleHeader}>Type</th>
            <th className={css.titleHeader}>Amount</th>
            <th className={css.titleHeader}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((trasactin) => {
            return <TransactionItem key={trasactin.id} trasactin={trasactin} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
