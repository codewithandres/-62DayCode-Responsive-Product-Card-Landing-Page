
/*----- MENU -----*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('show'))
}

showMenu('nav-toggle', 'nav-menu')

/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');

const changeSize = event => {
    sizes.forEach(size => size.classList.remove('active'));
    event.target.classList.add('active');
}

const changeColor = event => {
    let primary = event.target.getAttribute('primary');
    let color = event.target.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', (event) => changeSize(event)));
colors.forEach(c => c.addEventListener('click', (event) => changeColor(event)));
