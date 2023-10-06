import React from 'react';
import useTransactionData from './hooks/useTransactionData';
import useRewardCalculator from './hooks/useRewardCalculator';

const App = () => {
  const { transactions, isLoading, error } = useTransactionData();
  const { customerPointsData } = useRewardCalculator(transactions);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>

      {/* Monthly Reward Points Table */}
      <table className="monthly-reward-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Month</th>
            <th>Reward Points (Monthly)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(customerPointsData).map((customer) =>
            Object.keys(customerPointsData[customer].monthlyPoints).map((year) =>
              Object.keys(customerPointsData[customer].monthlyPoints[year]).map((month) => (
                <tr key={`${customer}-${year}-${month}`}>
                  <td>{customer}</td>
                  <td>{`${year} (${month})`}</td>
                  <td>{customerPointsData[customer].monthlyPoints[year][month]} points</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>

      {/* Total Reward Points Table */}
      <table className="total-reward-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(customerPointsData).map((customer) => (
            <tr key={customer}>
              <td>{customer}</td>
              <td>{customerPointsData[customer].totalPoints} points</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default App;
