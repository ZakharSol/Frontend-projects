// Инициализация Google Identity Services
function initGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        callback: handleGoogleSignInResponse
    });

    google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
    );
}

// Обработчик ответа от Google Sign-In
function handleGoogleSignInResponse(response) {
    if (response.credential) {
        // Обработка успешной авторизации
        console.log('Signed in as:', response.profileObj.name);
    } else {
        // Обработка ошибки авторизации
        console.error('Google Sign-In error:', response.error);
    }
}

// Загрузка и инициализация Google Identity Services
window.onload = function() {
    google.accounts.id.prompt();
    initGoogleSignIn();
};

const form = document.querySelector('.registration-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    let isValid = true;

    if (!nameInput.validity.valid) {
        isValid = false;
        alert('Пожалуйста, введите корректное имя.');
    }

    if (!emailInput.validity.valid) {
        isValid = false;
        alert('Пожалуйста, введите корректный email-адрес.');
    }

    if (!passwordInput.validity.valid) {
        isValid = false;
        alert('Пароль должен содержать не менее 8 символов.');
    }

    if (isValid) {
        form.submit();
    }
});