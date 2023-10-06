export default function calculatePoints(amount){
  let points = 0;
  if (amount > 100) {
    const overAmount = amount - 100;
    points += overAmount * 2;
    points += 50;
  } else if (amount >= 50) {
    points += (amount - 50);
  }
  return points;
}