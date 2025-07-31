var checkStraightLine = function (coordinates) {
  var is_x_same = true;
  var is_y_same = true;

  for (let i = 0; i < coordinates.length; i++) {
    if (is_x_same === false && is_y_same === false) {
      break;
    }

    
    if (coordinates[0][0] != coordinates[i][0]) {
      is_x_same = false;
    }
    if (coordinates[0][1] != coordinates[i][1]) {
      is_y_same = false;
    }

    console.log("X",is_x_same,coordinates[0][0], coordinates[i][0] )
    console.log("Y", is_y_same, coordinates[0][1],  coordinates[i][1])
  }

  if (is_x_same === true || is_y_same === true) {
    return true;
  }
  
  if (coordinates[1][0] - coordinates[0][0] == 0) {
    // vertical line, so check if all x are equal to coordinates[0][0]
    for (let i = 1; i < coordinates.length; i++) {
        if (coordinates[i][0] != coordinates[0][0]) return false;
    }
    return true;
}

  var m =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
  var c = coordinates[0][1] - m * coordinates[0][0];

  for (let i = 0; i < coordinates.length; i++) {
    // console.log(m)
    let x = coordinates[i][0];
    let y = coordinates[i][1];

    if (Math.abs(y - (m * x + c)) > 1e-9) return false;
  }

  return true;
};

console.log(
  checkStraightLine([[0,0],[0,5],[5,5],[5,0]])
);

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.
