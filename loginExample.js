let userName = prompt("Who are you?", '') // typical prompt
if (userName == 'admin'){ // проверка осуществляется значением "==" "админ"
    
    let pass = prompt("Password? ") // если "админ" то прошел проверку и перешел на секцию пароль

    if (pass == '123') { // если юзер ввел пароль 123
        alert( 'Welcome back!' ); // его возвращает сюда
      } else if (pass == '' || pass == null) { // сделано для того чтобы при нажатии ESC или кнопке отмена
        alert( 'Declined' ); // выводило отмена
      } else {
        alert( 'Wrong Password' ); // или не правильный пароль
      }
}

else if (userName == "" || userName == null){ // то же самое что выше только с юзернеймом
    alert("Declined"); // отмена
} else {
    alert("Wrong User") // не правильное юзернейм
}
