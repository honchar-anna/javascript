
let ask = +prompt("Введіть пароль");
let pass = 1;
let i = 4 ;
while( i >=0  ){
  if ( ask == pass){
    document.write('Запрошуємо на сайт!');
  }
  else if (ask !== pass){
    ask = + prompt(`залишилось ${i} спроби`);
    
  }
  else{
    document.write('Будь ласка спробуйте пізніше!')
  }
  i--
}