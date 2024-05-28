const modeToggle = document.getElementsByClassName('theme-button')[0];

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});