/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var save_coordinate = [];
  let top = 0,
    bottom = matrix.length;
  let right = matrix[0].length,
    left = 0;

  for (let i = 0; i < matrix.length; i++) {
    // got all the coordinate the 0
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        save_coordinate.push([i, j]);
      }
    }
  }

  for (let i = 0; i < save_coordinate.length; i++) {
    let column = save_coordinate[i][0];
    let row = save_coordinate[i][1];

    // console.log("column:",column,"/ row:",row)

    if (row < right) {
      // move right and replace that 0
      for (let j = row + 1; j < right; j++) {
        matrix[column][j] = 0;
      }
    }

    if (row >= left) {
      // move left and replace that 0
      for (let j = row - 1; j >= left; j--) {
        matrix[column][j] = 0;
      }
    }

    if (column < bottom) {
      // move left and replace that 0
      for (let j = column + 1; j < bottom; j++) {
        matrix[j][row] = 0;
      }
    }

    if (column >= top) {
      // move left and replace that 0
      for (let j = column - 1; j >= left; j--) {
        matrix[j][row] = 0;
      }
    }

  }

  return matrix;
};

function alt_setZeroes(matrix) {
    const totalRows = matrix.length;
    const totalColumns = matrix[0].length;

    let firstRowNeedsToBeZeroed = false;
    let firstColumnNeedsToBeZeroed = false;

    // Step 1: check if first row has any zero
    for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
        if (matrix[0][columnIndex] === 0) {
            firstRowNeedsToBeZeroed = true;
            break;
        }
    }

    // Step 1: check if first column has any zero
    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
        if (matrix[rowIndex][0] === 0) {
            firstColumnNeedsToBeZeroed = true;
            break;
        }
    }

    // Step 2: mark zeros in first row and first column as flags
    for (let rowIndex = 1; rowIndex < totalRows; rowIndex++) {
        for (let columnIndex = 1; columnIndex < totalColumns; columnIndex++) {
            if (matrix[rowIndex][columnIndex] === 0) {
                matrix[rowIndex][0] = 0; // mark that this entire row should be zeroed
                matrix[0][columnIndex] = 0; // mark that this entire column should be zeroed
            }
        }
    }

    // Step 3: zero out cells based on those flags
    for (let rowIndex = 1; rowIndex < totalRows; rowIndex++) {
        for (let columnIndex = 1; columnIndex < totalColumns; columnIndex++) {
            if (matrix[rowIndex][0] === 0 || matrix[0][columnIndex] === 0) {
                matrix[rowIndex][columnIndex] = 0;
            }
        }
    }

    // Step 4: zero the entire first row if it originally needed to be zeroed
    if (firstRowNeedsToBeZeroed) {
        for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
            matrix[0][columnIndex] = 0;
        }
    }

    // Step 4: zero the entire first column if it originally needed to be zeroed
    if (firstColumnNeedsToBeZeroed) {
        for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
            matrix[rowIndex][0] = 0;
        }
    }
}



console.log(
  setZeroes([
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
