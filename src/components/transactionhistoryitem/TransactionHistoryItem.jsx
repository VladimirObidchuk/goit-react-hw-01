import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({ transaction }) {
  return transaction.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={css.rowTable}>
        <td className={css.textTable}>{type}</td>
        <td className={css.textTable}>{amount}</td>
        <td className={css.textTable}>{currency}</td>
      </tr>
    );
  });
}
