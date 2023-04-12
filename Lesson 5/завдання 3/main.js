
let funMax = (array)=> {
     let max = array[0];
       for (let funMaxElement of array) {
          if (funMaxElement > max) max = funMaxElement;
      }
      return max;
 };
  let funMaxReturn = funMax([23,3254,45345,22,33434]);
  console.log(funMaxReturn);