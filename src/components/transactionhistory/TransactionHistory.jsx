import TransactionHistoryItem from "../transactionhistoryitem/transactionhistoryItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transaction }) {
  console.log(" transaction", transaction);
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
          <TransactionHistoryItem transaction={transaction} />
        </tbody>
      </table>
    </div>
  );
}
