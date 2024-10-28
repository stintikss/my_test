function loginAvtBut() {

}

function registrationBut() {
    document.getElementById('form').style.display = 'none'
    document.getElementById('form1').style.display = 'none'
    document.getElementById('form2').style.display = 'block'
}

function nextLogin() {
    const login = document.getElementById('types-login').value;
    const errorGood = document.getElementById('error-good');
    const logEst = document.getElementById('log--est');
    const noEnglish = document.getElementById('englishh-error');
    const englishLettersRegex = /^[A-Za-z]+$/;

    
    errorGood.style.display = 'none';
    logEst.style.display = 'none';
    noEnglish.style.display = 'none';

    if (login.length < 5) {
        errorGood.style.display = 'block';
    } else if (!englishLettersRegex.test(login)) {
        noEnglish.style.display = 'block';
    } else {
        localStorage.setItem('savedLogin', login);
        console.log('Логин корректен');   
    }
}