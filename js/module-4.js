"use strict";
const countTotalSalary = function (employees) {
  let totalValue = 0;
  const values = Object.values(employees);
  for (let value of values) {
    totalValue += value;
  }
  return totalValue;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
