
const showMenu = (togleId, navId) => {

    const toggle = document.getElementById(togleId);
    const nav = document.getElementById(navId);

    if (toggle && nav)
        //agregamos y quitamos la clase al precionar en el boton 
        toggle.addEventListener('click', () => nav.classList.toggle('show'));
};

showMenu('nav-toggle', 'nav-menu');