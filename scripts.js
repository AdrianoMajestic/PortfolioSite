const themeToggle = document.getElementById('theme-toggle');
// Если в localStorage ничего нет, ставим 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = (theme === 'light') ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});
document.querySelector('.contact-form').addEventListener('submit', function() {
    gtag('event', 'generate_lead', {
        'event_category': 'form',
        'event_label': 'contact_page'
    });
    alert('Данные отправлены и событие зафиксировано!');
});
function updateButtonText(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}
// Функция для подсветки активной страницы в меню
function highlightCurrentPage() {
    const currentPath = window.location.pathname; // Получаем путь (напр. /about.html)
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Получаем имя файла из атрибута href (напр. index.html)
        const linkPath = link.getAttribute('href');

        // Если путь совпадает или мы на главной (корень сайта)
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Запускаем функцию
highlightCurrentPage();