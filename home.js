function checkAuth() {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');

    // Проверяем наличие токена, логина и пароля
    if (!login || !password) {
        // Если отсутствует один из них, перенаправляем на страницу входа
        window.location.href = '/index.html';
    }
}

// Вызываем функцию проверки при загрузке страницы
window.onload = checkAuth;



function checkAuth() {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if (!login || !password) {
        window.location.href = '/index.html';
    }
}

window.onload = checkAuth;





document.addEventListener('DOMContentLoaded', function() {
    const TypesName = document.getElementById('type-name');
    const savedName = localStorage.getItem('name');
    const savedId = localStorage.getItem('id');
    const popup = document.getElementById('popup');
    const typeNameBlock = document.getElementById('type-name-block');

    // Если имя сохранено, отображаем его, иначе показываем текст "Задать имя"
    if (savedName) {
        TypesName.innerHTML = savedName;
        TypesName.id = savedId;
    }

    // Логика клика по "Задать имя" (или сохраненному имени)
    TypesName.addEventListener('click', function() {
        if (savedName) {
            if (popup.style.display === 'none' || popup.style.display === '') {
                popup.style.display = 'flex';
            } else {
                popup.style.display = 'none';
            }
        } else {
            // Если имени нет, показываем поле ввода имени
            typeNameBlock.style.display = 'block';
        }
    });

    // Логика для кнопки "Подтвердить"
    document.getElementById('okay').addEventListener('click', function() {
        const typeNameInput = document.getElementById('type-name-input').value;
        const ErrorCreateName = document.getElementById('Error-create-name');
        const GoodCreateName = document.getElementById('Good-create-name');

        // Проверка корректности имени
        if (typeNameInput === "" || typeNameInput.length < 2) {
            ErrorCreateName.style.display = 'block';
            GoodCreateName.style.display = 'none';
        } else {
            GoodCreateName.style.display = 'block';
            ErrorCreateName.style.display = 'none';

            setTimeout(function() {
                // Прячем блок ввода имени и задаем новое имя
                typeNameBlock.style.display = 'none';
                TypesName.id = 'NewName';
                TypesName.innerHTML = typeNameInput;

                localStorage.setItem('name', typeNameInput);
                localStorage.setItem('id', 'NewName');

                popup.style.display = 'none'; // Закрываем попап, если он был открыт
            }, 2000);
        }
    });
});
