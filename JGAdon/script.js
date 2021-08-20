const overlay = document.getElementById('overlay');

overlay.addEventListener('click', closeOverlay);

function closeOverlay() {
    overlay.style.display = 'none';
}