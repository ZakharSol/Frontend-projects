document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('welcome-modal');
    var closeButton = document.getElementsByClassName('close-button')[0];

    // Проверяем, было ли уже показано модальное окно
    if (!localStorage.getItem('welcomeModalShown')) {
        modal.style.display = 'block';
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
        // Сохраняем в LocalStorage, что модальное окно было показано
        localStorage.setItem('welcomeModalShown', 'true');
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            localStorage.setItem('welcomeModalShown', 'true');
        }
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollToTop = document.querySelector('.scroll-to-top');

    if (window.pageYOffset > 100) {
        header.style.backgroundColor = '#555';
        header.style.opacity = '0.9';
        scrollToTop.classList.add('show');
    } else {
        header.style.backgroundColor = '#333';
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

