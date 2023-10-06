import calculatePoints from "./calculatePoint";
import getMonthName from "./getMonthName";

export default function processData(transactions){
  const data = {};
  transactions.forEach((transaction) => {
    const { customer, amount, date } = transaction;
    const year = date.split('-')[0];
    const monthName = getMonthName(date)

    if (!data[customer]) {
      data[customer] = {
        totalPoints: 0,
        monthlyPoints: {},
      };
    }

    if (!data[customer].monthlyPoints[year]) {
      data[customer].monthlyPoints[year] = {};
    }

    const points = calculatePoints(amount);
    data[customer].monthlyPoints[year][monthName] = (data[customer].monthlyPoints[year][monthName] || 0) + points;
    data[customer].totalPoints += points;
  });

  return data;
}