document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.getElementById("types-login");
    const errorGood = document.getElementById("error-good");
    const logEst = document.getElementById("log--est");
    const englishError = document.getElementById("englishh-error");
    const zeroSimv = document.getElementById('zero-simv');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    function validateLogin() {
        const loginValue = loginInput.value;
    
        // Проверка на пустое значение
        if (loginValue === "") {
            zeroSimv.style.display = 'block';
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
            zeroSimv.style.display = 'none';
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
            localStorage.setItem("login", loginValue);
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
