const showMenu = (togleId, navId) => {
    const toggle = document.getElementById(togleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    };
};

showMenu('nav-toggle', 'nav-menu');