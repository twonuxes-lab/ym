// 1. ПРЕЛОАДЕР (Скрываем после загрузки)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500); // Задержка 1.5 сек для красоты
});

// 2. ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК САЙТА
function navigateTo(sectionName) {
    document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const targetPage = document.getElementById('page-' + sectionName);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.scrollTop = 0; // Сброс скролла при переходе
    }

    const activeNav = document.getElementById('nav-' + sectionName);
    if (activeNav) activeNav.classList.add('active');
}

// 3. ПЕРЕКЛЮЧЕНИЕ ОС В СКАЧИВАНИИ
function switchOS(osName, btnElement) {
    document.querySelectorAll('.os-tab').forEach(tab => tab.classList.remove('active'));
    btnElement.classList.add('active');

    const pcBlock = document.getElementById('os-pc');
    const mobileBlock = document.getElementById('os-mobile');

    if (osName === 'pc') {
        pcBlock.style.display = 'grid';
        mobileBlock.style.display = 'none';
    } else {
        pcBlock.style.display = 'none';
        mobileBlock.style.display = 'grid';
    }
}

// 4. МОБИЛЬНОЕ МЕНЮ
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

function closeMobileMenu() {
    burgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// 5. МОДАЛЬНЫЕ ОКНА
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Закрытие по клику на фон
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});