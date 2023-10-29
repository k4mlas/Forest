////////////////////////////////////////zmienne do strony

let $footerYear;

let $btnNavMobile;
let $navMobile;
let $navLinksMobile;

let $navLinksDesktop;
let $sections;

let $name;
let $mail;
let $msg;
let $nameError;
let $emailError;
let $textError;
let $formCheck;
let $checkError;
let $formBtn;
let $popup;
let $popupBtn;
let $errors;

///////////////////////////////////////Funkcja main

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	$footerYear = document.querySelector('.footer__date__year');
	$btnNavMobile = document.querySelector('.header__content__btn');
	$navMobile = document.querySelector('.header__nav');
	$navLinksMobile = document.querySelectorAll('.header__nav__items__item');
	$navLinksDesktop = document.querySelectorAll('.header__navDesktop__item');
	$sections = document.querySelectorAll('.sectionScroll');
	$name = document.getElementById('name');
	$mail = document.getElementById('mail');
	$msg = document.getElementById('msg');
	$nameError = document.getElementById('nameError');
	$emailError = document.getElementById('emailError');
	$textError = document.getElementById('textError');
	$formCheck = document.getElementById('akcept');
	$checkError = document.getElementById('checkError');
	$formBtn = document.querySelector('.contact__box__form__btn');
	$popup = document.querySelector('.contact__popup');
	$popupBtn = document.querySelector('.contact__popup__btn');
	$errors = 0;
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
	$formBtn.addEventListener('click', checkForm);
	$popupBtn.addEventListener('click', popupEnd);
};
////////////////////////////////////////////////////////////////////////Funkcje

//DATA

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	$footerYear.innerText = year;
};

//Nawigacja mobilna

const showNav = () => {
	$navMobile.classList.toggle('active');
	document.body.classList.toggle('sticky-body');
	$navLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			$navMobile.classList.remove('active');
			document.body.classList.remove('sticky-body');
		});
	});
};

//scrollspy

window.onscroll = () => {
	$sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			$navLinksDesktop.forEach((links) => {
				links.classList.remove('activeNav');
				document
					.querySelector('.header__navDesktop__item[href*=' + id + ']')
					.classList.add('activeNav');
			});
		}
	});
};

// Form

const checkForm = () => {
	checkName();
	checkEmail();
	checkText();
	checkCheck();
	if ($errors == 0) {
		$popup.style.display = 'flex';
		document.body.classList.add('sticky-body');
		$name.value = '';
		$mail.value = '';
		$msg.value = '';
		$formCheck.checked = false;
	}
	console.log($errors);
};

const checkName = () => {
	if ($name.value != '') {
		$nameError.style.visibility = 'hidden';
		$name.classList.remove('errorInput');
		$errors = 0;
	} else {
		$nameError.style.visibility = 'visible';
		$name.classList.add('errorInput');
		$errors = $errors + 1;
	}
};

const checkEmail = () => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if ($mail.value != '' && reg.test($mail.value)) {
		$emailError.style.visibility = 'hidden';
		$mail.classList.remove('errorInput');
		$errors = 0;
	} else {
		$emailError.style.visibility = 'visible';
		$mail.classList.add('errorInput');
		$errors = $errors + 1;
	}
};

const checkText = () => {
	if ($msg.value != '') {
		$textError.style.visibility = 'hidden';
		$msg.classList.remove('errorInput');
		$errors = 0;
	} else {
		$textError.style.visibility = 'visible';
		$msg.classList.add('errorInput');
		$errors = $errors + 1;
	}
};

const checkCheck = () => {
	if ($formCheck.checked) {
		$checkError.style.visibility = 'hidden';
		// $errors = 0;
	} else {
		$checkError.style.visibility = 'visible';
		$errors = $errors + 1;
	}
};

const popupEnd = () => {
	$popup.style.display = 'none';
	document.body.classList.remove('sticky-body');
};
////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
