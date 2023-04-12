let count=0;
console.log('Count =', count);
let ask1 = prompt('Столиця Японії?');
if(ask1.toLowerCase() ==='токіо'){
   count ++;
}
console.log('Count =', count);

let ask2 = prompt('2+2?');
if(ask2 ==='4'){
   count ++;
}
console.log('Count =', count);

let ask3 = prompt('Колишня столиця України?');
if(ask3.toLowerCase() ==='харків'){
   count ++;
}
console.log('Count =', count);

let ask4 = prompt('2+2*2?');
if(ask4 ==='6'){
   count ++;
}
console.log('Count =', count);

let ask5 = prompt('Аніме це мультики для дітей?Відповідь запишіть у вигляді "Так" або "Ні"');
if(ask5.toLowerCase() ==='ні'){
   count ++;
}
console.log('Count =', count);

let ask6 = prompt('Якщо змішати жовтий і синій кольори то який колір ми отримаємо в кінці?');
if(ask6.toLowerCase() === 'зелений') {
   count ++;
}
console.log('Count =', count);

let ask7 = prompt('Як перекладається bad choose?Відповідь запишіт у вигляді двох слів');
if(ask7.toLowerCase() === 'поганий вибір'){
   count ++;
}
console.log('Count =', count);

let ask8 = prompt('Якого кольору небо?');
if(ask8.toLowerCase() === 'синього'){
   count ++;
}
console.log('Count =', count);

let ask9 = prompt('Який зараз місяць?');
if(ask9.toLowerCase() === 'вересень'){
   count ++;
}
console.log('Count =', count);

let ask10 = prompt('Назва наступного місяця');
if(ask10.toLowerCase() === 'жовтень'){
   count ++;
}
console.log('Count =', count);

document.write(count,'/10');
if(count>= 0 && count<= 3){
   document.write('Дуже погано');
}
else if(count> 3 && count< 5 ){
   document.write('Погано');
}
else if(count >= 5 && count<= 7){
   document.write('Не погано');
 }

 else if(count> 7 && count< 9){
   document.write('Добре');
}
else if(count=== 10 ){
   document.write('Чудово');
 }

 