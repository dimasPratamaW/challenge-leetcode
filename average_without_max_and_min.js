var average = function (salary) {
  if (salary.length === 2) {
    return salary[1];
  }

  var result = 0;
  var max = salary[0],
      min = salary[0];
  for (let i = 0; i < salary.length; i++) {
    result += salary[i];
    if (max < salary[i]) {
      max = salary[i];
    }
    if (min > salary[i]) {
      min = salary[i];
    }
  }

  // console.log(max,min,result)

  return (result-max-min)/(salary.length-2)

};

console.log(average([4000, 3000, 1000, 2000]));
