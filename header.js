
export function renderHeader() {
const header = document.createElement('header');
header.innerHTML = `
        <div class="header">
    <div class="header1">
        <div class="header-left">
            <img class="linux-icon" src="img/free-icon-linux-2333464 (1).png" alt="">
            <p>Connect</p>
            <input type="text" placeholder="Поиск">
            <img src="img/icons8-лупа-90.png" alt="">
        </div>
        <div class="header-right"> 

        </div>
    </div>
    </div>

`;
document.body.prepend(header); // Добавляем заголовок в начало body
}
