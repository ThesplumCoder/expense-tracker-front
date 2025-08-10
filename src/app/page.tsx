import styles from './home.module.css';

const examples = [
  {
    id: 1,
    name: 'Water bottle', 
    time: '20250809T13:02:34', 
    value: 1700
  },
  {
    id: 2, 
    name: 'Bus fare cost', 
    time: '20250809T13:23:00',
    value: 2700
  }
]

type Expense = {
  id: number, 
  name: string, 
  time: string, 
  value: number
};

function ExpenseHeaders() {
  return (
    <tr>
      <td>Name</td>
      <td>Time</td>
      <td>Value</td>
    </tr>
  )
}

function ExpenseRow(expense: Expense) {
  return (
    <tr key={expense.id}>
      <td>{expense.name}</td>
      <td>{expense.time}</td>
      <td>{expense.value}</td>
    </tr>
  )
}

function Expenses() {
  const data = examples.map(expense => ExpenseRow(expense))
  return(
    <table className={styles.expenses}>
      <thead><ExpenseHeaders/></thead>
      <tbody>{data}</tbody>
    </table>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses/>
    </div>
  );
}