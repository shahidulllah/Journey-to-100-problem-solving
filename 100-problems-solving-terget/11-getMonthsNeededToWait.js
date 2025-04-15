/*Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

The function should return the number of months we have to wait, to get from the first month to the second one. */

const getMonthsNeededToWait = (month1, month2) => {
  if (month2 >= month1) {
    return month2 - month1;
  }

  const monthNeedToWait = 12 - month1;
  return monthNeedToWait + month2;
};
