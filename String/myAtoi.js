/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const reg = /^\s*/
    const strtirminit = str.replace(reg, '')
    // console.log(strtirminit)
    const headreg = /^[0-9-+]/
    const bodyreg = /[0-9]/
    // const symbolreg = /^[-|+]/
    let result = 0
    let head = strtirminit.substring(0,1)
    let body = strtirminit.substring(1).split('')
    if(headreg.test(head)) {
      console.log('head')
      result = head.toString()
      for(let i = 0; i < body.length; i++) {
        if (bodyreg.test(body[i])) {
          result += body[i].toString()
        } else {
          break
        }
      }
      console.log(result)
    }
    if (result > Math.pow(2, 31) - 1  ) {
      return Math.pow(2, 31) - 1
    } else if (result < Math.pow(-2 ,31)) {
      return Math.pow(-2, 31)
    } else {
      result = parseInt(result)
      let isnan = result
      return isnan === result ? result : 0
    }

  }
console.log('----')
console.log(myAtoi('  -'))
