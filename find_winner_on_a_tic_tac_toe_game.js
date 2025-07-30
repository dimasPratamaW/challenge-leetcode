/**
 * @param {number[][]} moves
 * @return {string}
 */
// 0. cek jika input kurang dari 2 maka nyatakan langsung lawannya menang
// 1. pertama pisahkan antara input A dan B
// 2. cek input apakah ada kombinasi yang bisa dinyatakan menang
var tictactoe = function (moves) {
  const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const two_d_array = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  var a_input = [];
  var b_input = [];
  var a_result = [];
  var b_result = [];

  for (let i = 0; i < moves.length; i++) {
    // this method to extract input from user A and B
    if (i % 2 === 0) {
      a_input.push(moves[i]);
    } else {
      b_input.push(moves[i]);
    }
  }

  for (let i = 0; i < a_input.length; i++) {
    // this method to given a location where the input belong from user A
    a_result.push(
      two_d_array.findIndex(
        (a) => a[0] === a_input[i][0] && a[1] === a_input[i][1]
      )
    );
  }
  for (let i = 0; i < b_input.length; i++) {
    // this method to given a location where the input belong from user B
    b_result.push(
      two_d_array.findIndex(
        (a) => a[0] === b_input[i][0] && a[1] === b_input[i][1]
      )
    );
  }

  for (let i = 0; i < winning_combination.length; i++) {
    let result = winning_combination[i].every((value) =>
      a_result.includes(value)
    );
    if (result === true) {
      return "A";
    }
  }
  for (let i = 0; i < winning_combination.length; i++) {
    let result = winning_combination[i].every((value) =>
      b_result.includes(value)
    );
    if (result === true) {
      return "B";
    }
  }

  if (moves.length === 9){
    return "Draw"
  }
  else{
    return "Pending"
  }
};

console.log(tictactoe([
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
]))


/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe2 = function (moves) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const toIndex = (row, col) => row * 3 + col;
  const aMoves = [], bMoves = [];

  for (let i = 0; i < moves.length; i++) {
    const index = toIndex(moves[i][0], moves[i][1]);
    (i % 2 === 0 ? aMoves : bMoves).push(index);
  }

  const isWinner = (playerMoves) =>
    winningCombinations.some(comb =>
      comb.every(cell => playerMoves.includes(cell))
    );

  if (isWinner(aMoves)) return "A";
  if (isWinner(bMoves)) return "B";
  return moves.length === 9 ? "Draw" : "Pending";
};

console.log(tictactoe2([
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
]));

