/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var lastNineIndex = digits.length - 1;

  do{
      if(digits[lastNineIndex] != 9){
          digits[lastNineIndex] = digits[lastNineIndex] + 1;
          return digits;
      }else{
          digits[lastNineIndex] = 0;
          lastNineIndex--;
      }
  }while(lastNineIndex >= 0);
  
  if(lastNineIndex == -1){
      digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([5,3,7,3,5,6,3,4,7,0,7,2,1,6,8,4,0,4,1,8,5,3,6,4,1,8,5,9,2,6]))