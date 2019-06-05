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
      result = head.toString()
      for(let i = 0; i < body.length; i++) {
        if (bodyreg.test(body[i])) {
          result + body[i].toString()
          console.log(result)
        } else {
          break
        }
      }
    }
    console.log(result)
}
console.log('----')
myAtoi('  +23212')