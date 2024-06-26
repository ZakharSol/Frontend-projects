window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollToTop = document.querySelector('.scroll-to-top');

    if (window.pageYOffset > 100) {
        header.style.opacity = '0.7';
        scrollToTop.classList.add('show');
    } else {
        header.style.opacity = '1';
        scrollToTop.classList.remove('show');
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Получаем все активные уровни
const activeLevels = document.querySelectorAll('.skill-level .level.active');

// Получаем ссылки на необходимые элементы
const modalElement = document.getElementById('skillModal');
const modalDescription = document.querySelector('.modal-skill-description');
const modal = new bootstrap.Modal(modalElement);

activeLevels.forEach((level) => {
  level.addEventListener('click', () => {
    const levelText = level.textContent;
    modalDescription.textContent = levelText;
    modal.show();
  });
});

// Добавляем обработчик события "hidden.bs.modal" на модальное окно
modalElement.addEventListener('hidden.bs.modal', () => {
  modalDescription.textContent = '';
});

// Добавляем обработчик клика вне модального окна
document.addEventListener('click', (event) => {
  if (!modalElement.contains(event.target)) {
    modal.hide();
  }
});





document.querySelectorAll('.slider-button').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        const {slideIndex} = button.dataset;
        const modal = document.getElementById('slideModal');
        const modalTitle = modal.querySelector('#slideModalLabel');
        const modalDescription = modal.querySelector('#slideModalDescription');
        const modalImage = modal.querySelector('img');

        modalTitle.textContent = button.parentElement.querySelector('h2').textContent;
        modalDescription.textContent = button.parentElement.querySelector('p').textContent;
        modalImage.src = document.querySelectorAll('.carousel-item')[slideIndex].querySelector('img').src;

        // Показываем модальное окно
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    });
});