let ask = prompt('Введіть Ім’я');
if (ask==='ім’я' || ask==='Ім’я'){  
   let ask1 = prompt('Введіт пароль');
if (ask1=='ЛОГОС'){
   console.log('Ласкаво просимо!');
}
else if (ask1 == "") {
   console.log('Пароль невірний');
}
else {
   console.log('Пароль невірний');
}
}
 else if (ask ==null)
{
   console.log('Вхід скасований');
}
else if(ask == "") {
   console.log(`Ви нічого не ввели`);
}
else{
   console.log('Я вас не знаю');
}


