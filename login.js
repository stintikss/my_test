document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.getElementById("types-login");
    const errorGood = document.getElementById("error-good");
    const logEst = document.getElementById("log--est");
    const englishError = document.getElementById("englishh-error");
    const form1 = document.getElementById('form1'); // изменил на 'form1' чтобы скрывать второй div

    // Условная функция для проверки валидности логина
    function validateLogin() {
        const loginValue = loginInput.value;
    
        // Проверка на пустое значение
        if (loginValue === "") {
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
            return; // Выход из функции, если поле пустое
        }
    
        // Пример проверки длины логина
        if (loginValue.length < 5) {
            errorGood.style.display = "block";
            logEst.style.display = "none";
            englishError.style.display = "none";
        } else if (/[^a-zA-Z0-9]/.test(loginValue)) { // Проверка на латинские символы и цифры
            englishError.style.display = "block";
            errorGood.style.display = "none";
            logEst.style.display = "none";
        } else {
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
            form1.style.display = 'none'; // Скрыть форму при успешной валидации
        }
    }
    

    // Событие input для скрытия ошибок при вводе текста
    loginInput.addEventListener("input", function() {
        errorGood.style.display = "none";
        logEst.style.display = "none";
        englishError.style.display = "none";
    });

    // Обработчик для кнопки "Создать аккаунт"
    document.getElementById("create-acc").addEventListener("click", function() {
        validateLogin();
        document.getElementById('form').style.display = 'none'
        document.getElementById('form1').style.display = 'none'
        document.getElementById('form2').style.display = 'block'
    });

    // Обработчик для проверки логина после нажатия на кнопку "Продолжить"
    document.getElementById("next-loginn").addEventListener("click", function() {
        validateLogin();
    });
});
