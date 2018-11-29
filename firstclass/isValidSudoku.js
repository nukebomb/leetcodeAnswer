/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var result = true
  function judge(arr) {
    var formateArr = arr.join('').split('.').join('').split('')
    var list = []
    formateArr.forEach(element => {
      if (!list[Number(element)]) {
        list[Number(element)] = 1
      } else {
        list[Number(element)] += 1
      }
    })
    return list.indexOf(2) === -1 ? false : true
  }
  var columns = [[], [], [], [], [], [], [], [], []]
  var zone = [[], [], [], [], [], [], [], [], []]
  board.forEach((miniArr) => {
    if (!judge(miniArr)) {
      result = false
    }
    miniArr.forEach((ele, index) => {
      columns[index].push(ele)
    })
  })
  columns.forEach(miniArr => {
    if (!judge(miniArr)) {
      result = false
    }
  })

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      zone[Math.floor(i / 3) * 3 + Math.floor(j / 3)].push(board[i][j])
    }
  }

  zone.forEach(item => {
    if (!judge(item)) {
      result = false
    }
  })
  return result
  // console.log(zone)
  // console.log(columns)
};

console.log(isValidSudoku(
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
))