/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = function (board) {
  let result = true
  
  function rowIsValid(barr) {
    for (let i = 0; i < 9; i++) {
      let barrstr = barr[i].join(',') + ','
      for (let j = 0; j < barr.length; j++) {
        if (barr[i][j] !== '.' && barrstr.replace(barr[i][j] + ',', '').indexOf(barr[i][j]) !== -1) {
          result = false
        }
      }
    }
  }
  rowIsValid(board)
  function areaToRow(area){
    let arrInrow = []
    for(let i = 1; i <= 3; i++) {
      for(let j = 1; j <=3; j++) {
        let arrele = []
        for(let k = 1; k<=3; k++) {
          for(let m = 1; m <= 3; m++) {
            arrele.push(area[k-1 + 3*(i -1)][m-1 + 3*(j-1)])
          }
        }
        arrInrow.push(arrele)
      }
    }
    return arrInrow
    // console.log(arrInrow)
  }
  if (result) {
    (function colIsValid() {
      for (let i = 0; i < 9; i++) {
        let boardstr
        for(let j=0 ; j < 9 ; j++) {
          boardstr += board[j][i] + ','
        }
        for(let k =0 ; k < 9; k++) {
          if(board[k][i] !== '.' && boardstr.replace(board[k][i]+',','').indexOf(board[k][i])!== -1) {
            result = false
            return
          }
        }
      }
    })()
  }
  if(result) {
    rowIsValid(areaToRow(board))
  }
  return result
}

console.log(isValidSudoku(
  [
    ["5", "3", ".", "7", ".", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", ".", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
))