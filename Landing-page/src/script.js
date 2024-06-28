// Инициализируем ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Добавляем обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Применяем эффекты для секций
    revealOnLoad();
});

function revealOnLoad() {
    sr.reveal('.hero-title', { delay: 300, origin: 'top' });
    sr.reveal('.hero-description', { delay: 400, origin: 'top' });
    sr.reveal('.hero-button', { delay: 500, origin: 'bottom' });
}


window.addEventListener('scroll', function () {
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

document.querySelector('.scroll-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Уровни навыков
var skillLevels = ['Low', 'Medium', 'High'];

// Данные о навыках
var skillsData = [
    [2, 'HTML+CSS', 1, 'Я имею опыт в создании отзывчивых и доступных веб-сайтов с использованием HTML и CSS. Я работал над проектами, которые включали в себя реализацию пользовательских макетов, стилей и отзывчивого дизайна.'],
    [2, 'JavaScript', 1, 'Я хорошо понимаю JavaScript и его основные концепции. Я использовал JavaScript для построения интерактивных веб-приложений, манипулирования DOM и реализации динамического функционала.'],
    [2, 'C#', 1, 'Я имею опыт в программировании на C#, в основном для разработки Windows-приложений, .NET-ориентированных веб-сервисов. Я работал над проектами, которые включали в себя объектно-ориентированное программирование, интеграцию с базами данных и разработку Windows Forms.'],
    [2, 'PHP', 0, 'Я знаком с основными концепциями PHP (синтаксис, переменные, условные операторы, циклы, функции, и прочее). Знаком с основами фреймворка Laravel (контроллеры, модели, маршрутизация, представления и прочее), но у меня не было много практического опыта в разработке веб-приложений на основе данного языка.'],
    [2, 'Python', 0, 'Я знаком с основами Python (синтаксис, переменные, условные операторы, циклы, функции, объектно-ориентированное программирование и прочее). Имеется практический опыт в написании скриптов разного направления (автоматизация личных рабочих процессов). Знаком с основами фреймворка Django (структура, взаимодействие с базами данных, с API и прочее). Есть ограниченное понимание использования языка в анализе данных, машинном обучении.'],
    [2, 'Delphi', 1, 'У меня есть опыт программирования на Delphi, который я использовал в компании, где работал продолжительное время, для автоматизации бизнес-процессов различных предприятий (разработка, внедрение, сопровождение).'],
    [2, 'SQL', 2, 'У меня хорошее понимание SQL и опыт работы с реляционными базами данных. Я писал сложные запросы, создавал хранимые процедуры и разрабатывал схемы баз данных для различных проектов.'],
    [2, 'Git', 2, 'У меня есть опыт использования Git для контроля версий. Я знаком с рабочими процессами Git, стратегиями ветвления и необходимым функционалом Git.'],
    [2, 'Docker', 2, 'У меня есть опыт использования Docker для контейнеризации и развертывания приложений. Я настраивал и управлял контейнерами Docker, создавал образы Docker и интегрировал Docker в конвейеры разработки и развертывания.'],
    [1, "Communication", 2, "Эффективно общаюсь, активно слушаю и ясно излагаю свои мысли."],
    [1, "Teamwork", 2, "Умею работать в команде, проявляю гибкость и сотрудничество."],
    [1, "Problem Solving", 2, "Умею анализировать проблемы и находить эффективные решения."],
    [1, "Creativity", 2, "Мыслю креативно, нахожу нестандартные подходы к задачам."],
    [1, "Adaptability", 2, "Быстро приспосабливаюсь к изменениям и новым условиям."],
    [1, "Time Management", 2, "Эффективно планирую свое время и расставляю приоритеты."]
];

// Функция для создания элементов навыков
function createSkillItem(skillData) {
    var skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');

    var skillNameElement = document.createElement('h3');
    skillNameElement.textContent = skillData[1];

    var skillLevel = document.createElement('div');

    skillLevel.classList.add('skill-level');

    for (var i = 0; i < skillLevels.length; i++) {
        var levelItem = document.createElement('div');
        levelItem.classList.add('level');
        if (i === skillData[2]) {
            levelItem.classList.add('active');
            levelItem.addEventListener('click', function () {
                showSkillModal(skillData[1], skillLevels[skillData[2]], skillData[3]);
            });
        }
        levelItem.textContent = skillLevels[i];
        skillLevel.appendChild(levelItem);
    }

    skillItem.appendChild(skillNameElement);
    skillItem.appendChild(skillLevel);

    return skillItem;
}

var softSkillsData = skillsData.filter(function(skill) {
    return skill[0] === 1;
  });
  
  var hardSkillsData = skillsData.filter(function(skill) {
    return skill[0] === 2;
  });
  
  function createSkillItems(skillsData, containerId) {
    var skillsContainer = document.getElementById(containerId);
    for (var i = 0; i < skillsData.length; i++) {
      var skillItem = createSkillItem(skillsData[i]);
      skillsContainer.appendChild(skillItem);
    }
  }
  
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var activeTab = this.dataset.tab;
  
      // Удалить класс "active" с предыдущей активной вкладки
      document.querySelector('.tab-btn.active').classList.remove('active');
      document.querySelector('.tab-content.active').classList.remove('active');
  
      // Добавить класс "active" к текущей активной вкладке
      this.classList.add('active');
      document.getElementById(activeTab).classList.add('active');
    });
  });
  
  // Создание навыков для Soft Skills
  createSkillItems(softSkillsData, 'soft-skills-container');
  
  // Создание навыков для Hard Skills
  createSkillItems(hardSkillsData, 'hard-skills-container');

// Функция для показа модального окна навыков
function showSkillModal(skillName, skillLevel, skillDescription) {
    var modalElement = document.getElementById('skillModal');
    var modalTitleElement = modalElement.querySelector('.modal-title');
    var modalSubjectElement = modalElement.querySelector('.modal-subject-title');
    var modalSkillElement = modalElement.querySelector('.modal-skill-description');

    modalTitleElement.textContent = 'Description of level of understanding';
    modalSubjectElement.textContent = skillName;
    modalSkillElement.textContent = skillDescription;

    modalElement.classList.add('show');

    var closeModalButton = modalElement.querySelector('#closeModal');
    closeModalButton.addEventListener('click', function () {
        modalElement.classList.remove('show');
    });
}

// Создание динамических элементов навыков
var skillsContainer = document.getElementById('skills-container');
for (var i = 0; i < skillsData.length; i++) {
    var skillItem = createSkillItem(skillsData[i]);
    skillsContainer.appendChild(skillItem);
}



window.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли модальное окно в блоке слайдера
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var existingModal = sliderWrapper.querySelector('#slideModal');
    if (existingModal) {
        // Если модальное окно существует, удаляем его
        existingModal.remove();
    }
});

window.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли модальное окно на странице
    var existingModal = document.getElementById('modal');
    if (existingModal) {
        // Если модальное окно существует, удаляем его
        existingModal.style.display = 'none';
    }
});

function openModal(slideIndex) {
    // Получаем модальное окно
    var modal = document.getElementById('modal');

    // Обновляем содержимое модального окна
    document.getElementById('modal-title').textContent = `Slide ${slideIndex + 1}`;
    document.getElementById('modal-subject-title').textContent = `Subject for Slide ${slideIndex + 1}`;
    document.getElementById('modal-skill-description').textContent = `Description for Slide ${slideIndex + 1}`;

    // Показываем модальное окно
    modal.style.display = 'block';

    // Добавляем обработчики для кнопки закрытия
    var closeButton = document.getElementsByClassName('close-button')[0];
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}