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
