//З використанням циклу
let sumG = function (n,q) {
   let b1 = 1;
   let a=1;
   let str = "";
   for (let i = 1; i < n; i++){
         b1 = b1 * q;
           str += b1 + " ";
                     if(b1 > 1) {
                 a+= b1;
               }
            }
         console.log (str);
     return a;
   };
   console.log (sumG(5,2));

//З використанням формули
let f2 = function (n,q) {
   let b1 = 1;
   let sum = 0;
   for (let i = 1; i <=1; i++){
     b1*=(1-q**n)/(1-q);
     sum+=b1;
   }
   return sum;
   };
console.log( f2(5,2)) ;
