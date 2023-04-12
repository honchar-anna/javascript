

let a = prompt("Введіть перше чило");
let  b = prompt("Введіть друге чило ");
    let simpleNumber =(a, b)=>{
      for (let i = a; i <= b; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0) {
      for (let j = 3; j * j <= i; j = j + 2) {
        if (i % j == 0) {
          flag = 0;
          break;
        }
      }
    } else if (i != 2) flag = 0;
    if (flag == 1) {
      console.log(i);
    }
  }
  
  }
  simpleNumber(a,b);


