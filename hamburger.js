document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('#header .nav-list ul');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
