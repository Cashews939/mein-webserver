function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        console.log(`Active link set: ${currentPage}`); // Debugging
    }
}

function toggleMenu() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");

    // Debugging: Prüfe, ob das Menü sichtbar wird
    console.log("Menu toggled:", navbar.classList.contains("show"));
}

// Stelle sicher, dass das Skript nach dem Laden der Seite korrekt funktioniert
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".menu-icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }
});


window.addEventListener("load", function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveLink(); // Nach dem Laden aktiv setzen
        })
        .catch(error => console.error('Error loading navbar:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
