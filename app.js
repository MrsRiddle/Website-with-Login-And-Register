const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


registerLink.onlick = () => {
    wrapper.classList.add('active');
};

loginLink.onlick = () => {
    wrapper.classList.remove('active');
};

