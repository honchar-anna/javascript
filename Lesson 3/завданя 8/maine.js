let a=+prompt('Введіть перше число');
let b=+prompt('Введіть друге число');
let res=1;
for(let i=1; i<=b|| i<=-b; i++ ){
   res*=a;
   if( -b>0){
      for(let i=1; i<=b|| i<=-b; i++){
         res*=1/a;
         
      }
   }
}
document.write(`<h2>${res}</h2>`);