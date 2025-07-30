/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 1. need to know how big the matrix is
// 2. after that if movin to the west we will take it till the bound
// temuan ide adalah ketika kebawah ataupun ke atas posisi index tidak akan pernah berubah
// conth :ketika turun ke matrix bawah [1,2,3,4] dan index sedang di 2 maka array selanjutnya index yang terpilih adalah index ke 2

var spiralOrder = function (matrix) {
  var length = matrix[0].length;
  var width = matrix.length;
  let size_matrix = length * width;
  var result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  var position = [0, 0];
  var facing = "R";

  while (result.length < size_matrix && top <= bottom && left <= right) {
    if (facing === "R") {
      for (let i = position[1]; i <= right; i++) {
        result.push(matrix[position[0]][i]);
        position[1] = i;
      }
      top++; // cause their take the row so the TOP will change
      position[0] += 1;
      facing = "B";
      //   test_case();
    } else if (facing === "B") {
      for (let i = position[0]; i <= bottom; i++) {
        result.push(matrix[i][position[1]]);
        position[0] = i;
      }
      right--; // cause their take the column so the RIGHT will change
      position[1] -= 1;
      facing = "L";
      //   test_case();
    } else if (facing === "L") {
      for (let i = position[1]; i >= left; i--) {
        result.push(matrix[position[0]][i]);
        position[1] = i;
      }
      bottom--; // cause their take the row so the BOTTOM will change
      position[0] -= 1;
      facing = "T";
      //   test_case();
    } else if (facing === "T") {
      for (let i = position[0]; i >= top; i--) {
        result.push(matrix[i][position[1]]);
        position[0] = i;
      }
      left++; // cause their take the column so the LEFT will change
      position[1] += 1;
      facing = "R";
      //   test_case();
    }

    // function test_case() {
    //   console.log(result);
    //   console.log(boundary);
    //   console.log(position, `loop ${facing}`);
    // }
  }

  // console.log(result);
  return result;
};

var spiral_order_other_method = function (matrix) {
  // different method
  let result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // move right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // move down
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // move left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // move up
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
