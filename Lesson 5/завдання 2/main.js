
function number(n) {
   number:
      for(j=2, i=3;i * i <= n, j<=n;j++, i = i + 2){
   if(n%j===0 ||n%i===0){
      
   console.log(`Число ${n} не просте`);
   return false;
}
   else if(n%j!==0){
   console.log(`Число ${n}  просте`);
   break;
}  
 }}

number(5);