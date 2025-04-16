/**You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount that receives 2 numbers as parameters:

the number of kilometers to your destination
average consumption of liters per 100km
The function should return the amount of gasoline needed to complete the entire round-trip. */

const getGasolineAmount = (distance, consumptionPer100) => {
  const totalDistance = distance * 2;
  const consumption = consumptionPer100 / 100;

  return totalDistance * consumption;
};
