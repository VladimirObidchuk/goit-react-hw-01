import css from "./TransactionItem.module.css";

export default function TransactionHistoryItem({
  trasactin: { type, amount, currency },
}) {
  return (
    <tr className={css.rowTable}>
      <td className={css.textTable}>{type}</td>
      <td className={css.textTable}>{amount}</td>
      <td className={css.textTable}>{currency}</td>
    </tr>
  );
}
