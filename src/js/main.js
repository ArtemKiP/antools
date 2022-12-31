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

let signBtn = document.querySelector('#sign');
let sign = document.querySelector('.sign');
let signExit = document.querySelector('.sign__form-exit');


signBtn.onclick = function () {
sign.style.display = 'flex'
};

signExit.onclick = function () {
    sign.style.display = 'none'
};

sign.onclick = function (e) {
    if (e.target.classList.contains('sign')){
        sign.style.display = 'none'
    }
};