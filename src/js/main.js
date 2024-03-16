////////////////////////////////////////zmienne do strony

let $footerYear;
let $body;

let $btnNavMobile;
let $navMobile;
let $navLinksMobile;

let $navLinksDesktop;
let $sections;

let $name;
let $mail;
let $msg;
let $nameError;
let $formBtn;
let $popup;
let $popupBtn;
// Gallery

let $photos;
let $popupGallery;
let $closeGallery;
let $popupImg;
let $popupGalleryImg;
let $indexImg;
let $next;
let $back;
let $closeBtn;

///////////////////////////////////////Funkcja main

const main = () => {
	prepareDOMElements();
	galleryEngine();
	handleCurrentYear();
	prepareDOMEvens();
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
	$nameError = document.querySelectorAll('.contact__box__form__opction__error');
	$formBtn = document.querySelector('.contact__box__form__btn');
	$popup = document.querySelector('.contact__popup');
	$popupBtn = document.querySelector('.contact__popup__btn');
	$body = document.querySelector('body');
	$photos = document.querySelectorAll('.gallery__body__images__img img');
	$popupGallery = document.querySelector('.gallery__popupGallery');
	$closeGallery = document.querySelector('.closeGallery');
	$popupGalleryImg = document.querySelector('.gallery__popupGallery__img');
	$next = document.querySelector('.gallery__popupGallery__img__button--next');
	$back = document.querySelector(
		'.gallery__popupGallery__img__button--previous'
	);
	$closeBtn = document.querySelector('.gallery__popupGallery__img__button--close');
	$popupImg = document.createElement('img');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
	$popupBtn.addEventListener('click', closeForm);
	$formBtn.addEventListener('click', checkAllForm);
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

const showError = (input) => {
	const errorAlert = input.nextElementSibling;
	errorAlert.style.visibility = 'visible';
	input.classList.add('errorInput');
};

const hideError = (input) => {
	const errorAlert = input.nextElementSibling;
	errorAlert.style.visibility = 'hidden';
	input.classList.remove('errorInput');
};

const checkEmail = () => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (reg.test($mail.value)) {
		hideError($mail);
	} else {
		showError($mail);
	}
};

const checkError = (inputs) => {
	let errors = 0;
	inputs.forEach((er) => {
		if (er.classList.contains('errorInput')) {
			errors++;
		}
	});
	if (errors == 0) {
		$popup.style.display = 'flex';
		$body.classList.add('scrollNone');
	}
};

const closeForm = () => {
	$popup.style.display = 'none';
	$name.value = '';
	$mail.value = '';
	$msg.value = '';
	$body.classList.remove('scrollNone');
};

const checkForm = (inputs) => {
	inputs.forEach((el) => {
		if (el.value === '') {
			showError(el);
		} else {
			hideError(el);
		}
	});
};

const checkAllForm = (e) => {
	e.preventDefault();
	checkForm([$name, $mail, $msg]);
	checkEmail();
	checkError([$name, $mail, $msg]);
};

//Gallery
const galleryEngine = () => {
	$photos.forEach((photo, index) => {
		photo.addEventListener('click', (e) => {
			$body.classList.add('scrollNone');
			$popupGallery.classList.add('showPopupImg');
			$popupImg.setAttribute('src', '');
			$popupImg.src = e.target.src;
			$popupGalleryImg.appendChild($popupImg);
			$indexImg = index;
			$next.addEventListener('click', nextPhoto);
			$back.addEventListener('click', backPhoto);
			$closeBtn.addEventListener('click', close);
			console.log($indexImg);
		});
	});
};

const nextPhoto = () => {
	if ($indexImg == $photos.length - 1) {
		$indexImg = 0;
	} else {
		$indexImg++;
	}
	$popupImg.src = $photos[$indexImg].src;
};
const backPhoto = () => {
	if ($indexImg == 0) {
		$indexImg = $photos.length -1;
	} else {
		$indexImg--;
	}
	$popupImg.src = $photos[$indexImg].src;
};
const close = () => {
	$popupGallery.classList.remove('showPopupImg');
	$body.classList.remove('scrollNone');
};

////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
