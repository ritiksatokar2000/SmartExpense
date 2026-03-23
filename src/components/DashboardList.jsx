const DashboardList = ({ transactions }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          
          <th scope="col">Expense/Income</th>
          <th scope="col">Amount</th>
          <th scope="col">Expense Type/Income Scourse</th>
          <th scope="col">Date</th>
          <th scope="col">Note</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
        
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.source}</td>
            <td>{transaction.date}</td>
            <td>{transaction.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DashboardList;
