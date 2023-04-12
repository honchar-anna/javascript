let a=+prompt('Введіть перше число');
let b=+prompt('Введіть друге число');
let resul=1;
let i=1;

while(i<=b|| i<=-b){
   resul*=a;
   if( -b>0){
      let i=1;
      while(i<=b|| i<=-b){
         resul*=1/a;
         i++
      }
}
i++
}
document.write(`<h2>${resul}</h2>`);