document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.getElementById("types-login");
    const errorGood = document.getElementById("error-good");
    const logEst = document.getElementById("log--est");
    const englishError = document.getElementById("englishh-error");

    function validateLogin() {
        const loginValue = loginInput.value;

        if (loginValue.length < 5) {
            errorGood.style.display = "block";
            logEst.style.display = "none";
            englishError.style.display = "none";
        } else if (/[^a-zA-Z0-9]/.test(loginValue)) {
            englishError.style.display = "block";
            errorGood.style.display = "none";
            logEst.style.display = "none";
        } else {
            errorGood.style.display = "none";
            logEst.style.display = "none";
            englishError.style.display = "none";
        }
    }

    loginInput.addEventListener("input", function() {
        errorGood.style.display = "none";
        logEst.style.display = "none";
        englishError.style.display = "none";
    });

    document.getElementById("next-loginn").addEventListener("click", function() {
        validateLogin();
    });
});
