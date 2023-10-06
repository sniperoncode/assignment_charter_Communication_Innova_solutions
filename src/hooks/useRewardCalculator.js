import { useState, useEffect } from 'react';
import processData from '../helper/processData';

const useRewardCalculator = (transactions) => {
  const [customerPointsData, setCustomerPointsData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const result = processData(transactions);
      setCustomerPointsData(result);
    } catch (error) {
      setError(error);
    }
  }, [transactions]);

  return { customerPointsData, error };
};

export default useRewardCalculator;
