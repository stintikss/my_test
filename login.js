document.getElementById('login-avt').addEventListener('click', function() {
    // Получаем сохраненные значения из localStorage
    const storedLogin = localStorage.getItem("login");
    const storedPassword = localStorage.getItem("password");

    // Получаем введенные пользователем значения
    const LoginInput = document.getElementById('login-input').value;
    const PasswordInput = document.getElementById('passwordd').value;

    // Проверка логина и пароля
    if (LoginInput === storedLogin && PasswordInput === storedPassword) {
        alert("Успешно");
    } else {
        alert("Неверный логин или пароль");
    }
});
