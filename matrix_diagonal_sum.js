var diagonalSum = function (mat) {
  var check_even_or_odd = mat.length % 2;
  var result = 0;

  if (mat.length === 1) {
    return mat[0][0];
  }
  if (mat.length === 2) {
    for (let i = 0; i < mat.length; i++) {
      result += mat[i].reduce((a, b) => a + b, 0);
    }
    // console.log(result)
    return result;
  } else {
    for (let j = 0; j < mat.length; j++) {
      result += mat[j][j] + mat[j][mat.length - 1 - j];
    }
    let middle_index = Math.floor(mat.length / 2);
    if (check_even_or_odd != 0) {
      result -= mat[middle_index][middle_index];
    }
  }

  return result;
};



console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
  // diagonalSum([[1, 1],[1, 1]])
  // diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])
  // diagonalSum([[5]])
);
