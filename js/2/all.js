var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.contact');
var closePopupButton = popup.querySelector('.button-close');
var popupCheckBox = popup.querySelector('custom-checkbox');
var menuButton = document.querySelector('.nav-toggle');
var menu = document.querySelector('.main-nav__list');


menuButton.onclick = function() {
  menu.classList.toggle('MobileMenu--active');
};

openPopupButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal--show');
});
closePopupButton.addEventListener('click', function() {
	popup.classList.remove('modal--show');
});
document.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		popup.classList.remove('modal--show');
	}
});

function changeButtonState(checkbox) {
	var btn = document.getElementById('invisible');
	if(checkbox.checked) {
		btn.style.display = 'block';
	} else {
		btn.style.display = 'none';
	}
}