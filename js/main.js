
const toggleButton = document.getElementById('toggle-button');

// Al cargar la página, empieza en modo oscuro
document.body.classList.add('dark-mode');
toggleButton.textContent = '🌙';

// Alternar entre modos oscuro y claro
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌙';
    } else {
        toggleButton.textContent = '☀️';
    }
});