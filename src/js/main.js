let loginBtn = document.querySelector('#login');
let login = document.querySelector('.login');
let loginExit = document.querySelector('.login__form-exit');

loginBtn.onclick = function () {
    login.style.display = 'flex'
};


loginExit.onclick = function () {
login.style.display = 'none'
};

login.onclick = function (e) {
if (e.target.classList.contains('login')){
    login.style.display = 'none'
}
};