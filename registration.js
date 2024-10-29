document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.getElementById("types-login");
    const errorGood = document.getElementById("error-good");
    const logEst = document.getElementById("log--est");
    const englishError = document.getElementById("englishh-error");
    const zeroSimv = document.getElementById('zero-simv');
    const politika = document.getElementById('politika-next-loginn')
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    function validateLogin() {
        const loginValue = loginInput.value;
    
        // Проверка на пустое значение
        if (loginValue === "") {
            zeroSimv.style.display = 'block';
            politika.style.marginTop = '-5px';
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
            return; // Выход из функции, если поле пустое
        }
    
        if (loginValue.length < 5) {
            zeroSimv.style.display = 'none';
            errorGood.style.display = "block";
            logEst.style.display = "none";
            englishError.style.display = "none";
        } else if (/[^a-zA-Z0-9]/.test(loginValue)) {
            zeroSimv.style.display = 'none';
            englishError.style.display = "block";
            errorGood.style.display = "none";
            logEst.style.display = "none";
        } else {
            localStorage.setItem("login", loginValue);
            zeroSimv.style.display = 'none';
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
            form2.style.display = 'none'; // Скрыть форму при успешной валидации
            form3.style.display = 'block';
        }
    }
    

    loginInput.addEventListener("input", function() {
        zeroSimv.style.display = 'none';
        errorGood.style.display = "none";
        logEst.style.display = "none";
        englishError.style.display = "none";
    });

    document.getElementById("create-acc").addEventListener("click", function() {
        document.getElementById('form').style.display = 'none';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    });

    document.getElementById("next-loginn").addEventListener("click", function() {
        validateLogin();
    });
});

document.getElementById('next-loginns').addEventListener('click', function() {
    const passwordInput = document.getElementById('types-password').value;
    const form = document.getElementById('form');
    const form1 = document.getElementById('form1');
    const form3 = document.getElementById('form3');

    if (passwordInput === "") {
        alert("0 симв");
    } else if (passwordInput.length >= 6) { 
        // Проверяем, что длина пароля не менее 6 символов перед сохранением
        localStorage.setItem('password', passwordInput);
        form3.style.display = 'none'
        form.style.display = 'flex'
        form1.style.display = 'flex'

    } else {
        alert("Пароль должен содержать не менее 6 символов");
    }
});
 