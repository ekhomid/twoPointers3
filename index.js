/*
Найти максимальное число идущих подряд одинаковых символов в строке
*/

function maxRepeat(str){

  if (str.length === 1) 
    return 1;

    let l = 0;
    let r = 1;
    let maxCount = 1;
    let tempMaxCount = 1;

    while (r < str.length) {

      if (str[l] == str[r]) {

        if (r == str.length - 1) {
          tempMaxCount = r - l + 1;
          
          if (tempMaxCount > maxCount) {
            maxCount = tempMaxCount;
          }
          break;
          
        } else {
          r++;
        }
  
      } else {
        
        tempMaxCount = r - l;

        if (tempMaxCount > maxCount) {
          maxCount = tempMaxCount;
        }
        
        l = r;
        r++;
      }
    }

  return maxCount;
};

var str = 'mama ama criminallllll!'; 
console.log(maxRepeat(str));


