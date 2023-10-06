import fakeData from "../fake-data";

export const fetchTransactionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = fakeData;
      resolve(data);
    }, 1000);
  });
};