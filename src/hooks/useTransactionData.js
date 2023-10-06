import { useState, useEffect } from 'react';
import { fetchTransactionData } from '../api';

const useTransactionData = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactionData();
        setTransactions(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { transactions, isLoading, error };
};

export default useTransactionData;
