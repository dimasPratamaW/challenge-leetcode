var lemonadeChange = function (bills) {
  var cashier = { 5: 0, 10: 0, 20: 0 };
  if (bills[0] > 5) {
    return false;
  }

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      cashier[5] += 1;
    } else if (bills[i] === 10) {
      cashier[10] += 1;
      if (cashier[5] <= 0) {
        return false;
      } else {
        cashier[5] -= 1;
      }
    } else if (bills[i] === 20) {
      cashier[20] += 1;

      if (cashier[10] >= 1) {
        cashier[10] -= 1;
        if (cashier[5] >= 1) {
          cashier[5] -= 1;
        } else {
          return false;
        }
      } else {
        if (cashier[5] < 3) {
          return false;
        } else {
          cashier[5] -= 3;
        }
      }
    }
    // console.log("--------");
    // console.log(bills[i]);
    // console.log(cashier);
  }

  return true;
};

// the expected input from user
console.log(lemonadeChange([5,5,5,20]));
