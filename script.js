// Переключение темной/светлой темы
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
        themeToggle.style.background = '#e9c46a';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Тёмная тема';
        themeToggle.style.background = '#e86a58';
    }

    // Анимация перехода
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

// Плавное появление элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(element => {
    observer.observe(element);
});