/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const scale = matrix.length
  const internal = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < scale; i++) {
    for (let j = 0; j < scale; j++) {
      // matrix[j][scale - i - 1] = internal[i][j]
      matrix[i][j] = internal[scale - j - 1][i]
    }
  }
}

test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate(test)
console.log(test)