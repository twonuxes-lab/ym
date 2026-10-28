// ==========================================
// --- БАЗОВЫЕ СКРИПТЫ ---
// ==========================================
function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function openDonatePage() {
    document.getElementById('donatePage').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDonatePage() {
    document.getElementById('donatePage').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function scrollToServersAndRegister() {
    document.getElementById('servers').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { openModal('registerModal'); }, 800);
}

// ==========================================
// --- ЭНЦИКЛОПЕДИЯ (МИР YUMATRIN) ---
// ==========================================
function openWorldPage() {
    document.getElementById('worldPage').classList.add('active');
    document.body.style.overflow = 'hidden';
    openWorldTab('tab-main', document.querySelector('.world-tab'));
}

function closeWorldPage() {
    document.getElementById('worldPage').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openWorldTab(tabId, btnElement) {
    document.querySelectorAll('.world-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.world-content').forEach(content => content.classList.remove('active'));
    btnElement.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// ==========================================
// --- МОДАЛКИ СКАЧИВАНИЯ ---
// ==========================================
function openDownloadModal(platform, title) {
    let text = "";

    if (platform === 'start') {
        text = "Уважаемые игроки! На данный момент проект находится в стадии активной разработки. Скоро мы запустим серверы, и вы сможете начать играть. Следите за новостями в наших соцсетях!";
    } else if (platform === 'android') {
        text = "Скачивание APK-файла пока недоступно. Игра находится в стадии разработки. Мы сообщим о выходе в наших социальных сетях.";
    } else if (platform === 'ios') {
        text = "Приложение еще не опубликовано в App Store. Ожидайте официального релиза YUMATRIN MOBILE.";
    } else if (platform === 'rustore') {
        text = "В магазине RuStore игра пока недоступна. Подготовка к публикации идет полным ходом.";
    } else if (platform === 'pc') {
        text = "Скачивание лаунчера временно приостановлено. Мы тестируем сборку. Ожидайте новостей от руководства проекта.";
    }

    document.getElementById('downloadModalTitle').innerText = title;
    document.getElementById('downloadModalText').innerText = text;
    openModal('downloadModal');
}

// ==========================================
// --- ОФОРМЛЕНИЕ ЗАКАЗА / ДОНАТ ---
// ==========================================
function openCheckout(amount, price) {
    document.getElementById('checkoutAmount').innerText = amount;
    document.getElementById('checkoutPrice').innerText = price;
    document.getElementById('agreeCheckbox').checked = false;
    togglePayBtn();
    openModal('checkoutModal');
}

function togglePayBtn() {
    const checkbox = document.getElementById('agreeCheckbox');
    const btn = document.getElementById('payBtn');

    if (checkbox.checked) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    } else {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    }
}

function processPayment() {
    // Honeypot-защита: если поле заполнено — это бот
    if (document.getElementById('hp_field').value !== '') return false;

    alert('Оплата временно недоступна. Платежные системы находятся на стадии подключения.');
    closeModal('checkoutModal');
}

// ==========================================
// --- ЗАКРЫТИЕ МОДАЛОК КЛИКОМ ПО ФОНУ ---
// ==========================================
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
});

// ==========================================
// --- ЗАЩИТА САЙТА (без фанатизма) ---
// ==========================================
document.addEventListener('selectstart', function (e) {
    // Не мешаем выделять текст в полях ввода
    if (e.target.closest('input, textarea, select')) return;
    e.preventDefault();
});

document.addEventListener('copy', function (e) {
    if (e.target.closest('input, textarea')) return;
    e.preventDefault();
});

document.addEventListener('contextmenu', function (e) {
    // На полях ввода разрешаем правый клик (вставка, копирование)
    if (e.target.closest('input, textarea')) return;
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey && (
        e.key === 'I' || e.key === 'J' || e.key === 'C' ||
        e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67
    )) {
        e.preventDefault();
        return false;
    }
    // Ctrl+U — просмотр исходника
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
    // Ctrl+S — сохранение страницы
    if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }
});

console.log("%cSTOP! Этот сайт защищен.", "color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 0 #000;");