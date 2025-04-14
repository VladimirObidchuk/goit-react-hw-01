import TransactionItem from "../transactionitem/transactionhistoryItem";
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
          <TransactionItem transaction={transaction} />
        </tbody>
      </table>
    </div>
  );
}
